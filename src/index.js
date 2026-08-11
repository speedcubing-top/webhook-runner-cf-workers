import config from '../config.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // 1. 驗證訪問這支 Worker 的 Bearer Token
    const secretKey = env.AUTH_SECRET;
    if (secretKey) {
      const authHeader = request.headers.get("authorization");
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return new Response("Forbidden: Missing or invalid Authorization header", { status: 403 });
      }
      const token = authHeader.split(" ")[1];
      if (token !== secretKey) {
        return new Response("Forbidden: Invalid token", { status: 403 });
      }
    }

    if (!config || !config.webhooks) {
      return new Response("Not Found (1)", { status: 404 });
    }

    // 2. 尋找對應的 webhook 路由
    const matchedWebhook = config.webhooks.find(w => w.path === pathname);
    if (!matchedWebhook || request.method !== "POST") {
      return new Response("Not Found (2)", { status: 404 });
    }

    console.log(`Received webhook: ${pathname}`);

    // 3. 取得從 Cloudflare Secret 導入的 GitHub Token
    const githubToken = env.GITHUB_TOKEN || "";

    // 4. 非同步執行 run 裡面的每一道指令
    const promises = matchedWebhook.run.map(async (cmd) => {
      try {
        const urlMatch = cmd.match(/curl\s+-X\s+POST\s+([^\s]+)/);
        if (!urlMatch) return;
        const targetUrl = urlMatch[1];

        // 將 \${GITHUB_TOKEN} 替換為實際的 Secret 數值
        const resolvedCmd = cmd.replace(/\$\{GITHUB_TOKEN\}/g, githubToken);
        const tokenMatch = resolvedCmd.match(/-H\s+"Authorization:\s+Bearer\s+([^"]+)"/);
        const token = tokenMatch ? tokenMatch[1] : "";

        const dataMatch = resolvedCmd.match(/-d\s+'([^']+)'/);
        const bodyData = dataMatch ? dataMatch[1] : "{}";

        console.log(`Running fetch to: ${targetUrl}`);

        const response = await fetch(targetUrl, {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            "User-Agent": "Cloudflare-Worker"
          },
          body: bodyData
        });

        if (!response.ok) {
          console.error(`❌ Failed to request ${targetUrl}: ${response.statusText}`);
        } else {
          console.log(`✅ Successfully requested: ${targetUrl}`);
        }
      } catch (err) {
        console.error(`❌ Error parsing/running curl:`, err.message);
      }
    });

    ctx.waitUntil(Promise.all(promises));

    return new Response(`Running scripts for ${pathname}`, { status: 200 });
  }
};
