export default {
  webhooks: [
    {
      path: "/github/speedcubing-top/speedcubinglib/build",
      run: [
        `curl -X POST https://api.github.com/repos/speedcubing-top/speedcubingProxy/actions/workflows/build-and-push.yml/dispatches
        -H "Authorization: Bearer \${GITHUB_TOKEN}"
        -H "Content-Type: application/json"
        -d '{"ref":"main"}'`,
        `curl -X POST https://api.github.com/repos/speedcubing-top/Permanent/actions/workflows/build.yml/dispatches
        -H "Authorization: Bearer \${GITHUB_TOKEN}"
        -H "Content-Type: application/json"
        -d '{"ref":"main"}'`,
        `curl -X POST https://api.github.com/repos/speedcubing-top/main-website-backend/actions/workflows/build-and-push.yml/dispatches
        -H "Authorization: Bearer \${GITHUB_TOKEN}"
        -H "Content-Type: application/json"
        -d '{"ref":"main"}'`,
        `curl -X POST https://api.github.com/repos/speedcubing-top/NameDatabase/actions/workflows/build-and-push.yml/dispatches
        -H "Authorization: Bearer \${GITHUB_TOKEN}"
        -H "Content-Type: application/json"
        -d '{"ref":"main"}'`
      ]
    },
    {
      path: "/github/speedcubing-top/speedcubingcommon/build",
      run: [
        `curl -X POST https://api.github.com/repos/speedcubing-top/speedcubingServer/actions/workflows/build-and-push.yml/dispatches
        -H "Authorization: Bearer \${GITHUB_TOKEN}"
        -H "Content-Type: application/json"
        -d '{"ref":"main"}'`,
        `curl -X POST https://api.github.com/repos/speedcubing-top/speedcubingProxy/actions/workflows/build-and-push.yml/dispatches
        -H "Authorization: Bearer \${GITHUB_TOKEN}"
        -H "Content-Type: application/json"
        -d '{"ref":"main"}'`
      ]
    }
  ]
};
