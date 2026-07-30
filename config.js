/*
speedcubinglib
- speedcubingproxy: build-and-push
- permanent: build-and-push
- main-website-backend: build-and-push
- namedatabase
speedcubingcommon
- speedcubingserver: build-and-push
- speedcubingproxy: build-and-push
speedcubingserver
- mc-server-image-builder: build-clutch
- mc-server-image-builder: build-fastbuilder
- mc-server-image-builder: build-knockbackffa
- mc-server-image-builder: build-limbo
- mc-server-image-builder: build-lobby
- mc-server-image-builder: build-mlgrush
- mc-server-image-builder: build-reduce
speedcubingproxy
- mc-server-image-builder: build-proxy
clutch
- mc-server-image-builder: build-clutch
fastbuilder
- mc-server-image-builder: build-fastbuilder
knockbackffa
- mc-server-image-builder: build-knockbackffa
limbo
- mc-server-image-builder: build-limbo
lobby
- mc-server-image-builder: build-lobby
mlgrush
- mc-server-image-builder: build-mlgrush
reduce
- mc-server-image-builder: build-reduce
*/

export default {
  webhooks: [
    {
      path: "/github/speedcubing-top/speedcubinglib/build",
      run: [
        `curl -X POST https://api.github.com/repos/speedcubing-top/speedcubingProxy/actions/workflows/build-and-push.yml/dispatches \
        -H "Authorization: Bearer \${GITHUB_TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{"ref":"main"}'`,
        `curl -X POST https://api.github.com/repos/speedcubing-top/Permanent/actions/workflows/build.yml/dispatches \
        -H "Authorization: Bearer \${GITHUB_TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{"ref":"main"}'`,
        `curl -X POST https://api.github.com/repos/speedcubing-top/main-website-backend/actions/workflows/build-and-push.yml/dispatches \
        -H "Authorization: Bearer \${GITHUB_TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{"ref":"main"}'`,
        `curl -X POST https://api.github.com/repos/speedcubing-top/NameDatabase/actions/workflows/build-and-push.yml/dispatches \
        -H "Authorization: Bearer \${GITHUB_TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{"ref":"main"}'`
      ]
    },
    {
      path: "/github/speedcubing-top/speedcubingcommon/build",
      run: [
        `curl -X POST https://api.github.com/repos/speedcubing-top/speedcubingServer/actions/workflows/build-and-push.yml/dispatches \
        -H "Authorization: Bearer \${GITHUB_TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{"ref":"main"}'`,
        `curl -X POST https://api.github.com/repos/speedcubing-top/speedcubingProxy/actions/workflows/build-and-push.yml/dispatches \
        -H "Authorization: Bearer \${GITHUB_TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{"ref":"main"}'`
      ]
    },
    {
      path: "/github/speedcubing-top/speedcubingserver/build",
      run: [
        `curl -X POST https://api.github.com/repos/speedcubing-top/mc-server-image-builder/actions/workflows/build-clutch.yml/dispatches \
        -H "Authorization: Bearer \${GITHUB_TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{"ref":"main"}'`,
        `curl -X POST https://api.github.com/repos/speedcubing-top/mc-server-image-builder/actions/workflows/build-fastbuilder.yml/dispatches \
        -H "Authorization: Bearer \${GITHUB_TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{"ref":"main"}'`,
        `curl -X POST https://api.github.com/repos/speedcubing-top/mc-server-image-builder/actions/workflows/build-knockbackffa.yml/dispatches \
        -H "Authorization: Bearer \${GITHUB_TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{"ref":"main"}'`,
        `curl -X POST https://api.github.com/repos/speedcubing-top/mc-server-image-builder/actions/workflows/build-limbo.yml/dispatches \
        -H "Authorization: Bearer \${GITHUB_TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{"ref":"main"}'`,
        `curl -X POST https://api.github.com/repos/speedcubing-top/mc-server-image-builder/actions/workflows/build-lobby.yml/dispatches \
        -H "Authorization: Bearer \${GITHUB_TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{"ref":"main"}'`,
        `curl -X POST https://api.github.com/repos/speedcubing-top/mc-server-image-builder/actions/workflows/build-mlgrush.yml/dispatches \
        -H "Authorization: Bearer \${GITHUB_TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{"ref":"main"}'`,
        `curl -X POST https://api.github.com/repos/speedcubing-top/mc-server-image-builder/actions/workflows/build-reduce.yml/dispatches \
        -H "Authorization: Bearer \${GITHUB_TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{"ref":"main"}'`
      ]
    },
    {
      path: "/github/speedcubing-top/speedcubingproxy/build",
      run: [
        `curl -X POST https://api.github.com/repos/speedcubing-top/mc-server-image-builder/actions/workflows/build-proxy.yml/dispatches \
        -H "Authorization: Bearer \${GITHUB_TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{"ref":"main"}'`
      ]
    },
    {
      path: "/github/speedcubing-top/clutch/build",
      run: [
        `curl -X POST https://api.github.com/repos/speedcubing-top/mc-server-image-builder/actions/workflows/build-clutch.yml/dispatches \
        -H "Authorization: Bearer \${GITHUB_TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{"ref":"main"}'`
      ]
    },
    {
      path: "/github/speedcubing-top/fastbuilder/build",
      run: [
        `curl -X POST https://api.github.com/repos/speedcubing-top/mc-server-image-builder/actions/workflows/build-fastbuilder.yml/dispatches \
        -H "Authorization: Bearer \${GITHUB_TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{"ref":"main"}'`
      ]
    },
    {
      path: "/github/speedcubing-top/knockbackffa/build",
      run: [
        `curl -X POST https://api.github.com/repos/speedcubing-top/mc-server-image-builder/actions/workflows/build-knockbackffa.yml/dispatches \
        -H "Authorization: Bearer \${GITHUB_TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{"ref":"main"}'`
      ]
    },
    {
      path: "/github/speedcubing-top/limbo/build",
      run: [
        `curl -X POST https://api.github.com/repos/speedcubing-top/mc-server-image-builder/actions/workflows/build-limbo.yml/dispatches \
        -H "Authorization: Bearer \${GITHUB_TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{"ref":"main"}'`
      ]
    },
    {
      path: "/github/speedcubing-top/lobby/build",
      run: [
        `curl -X POST https://api.github.com/repos/speedcubing-top/mc-server-image-builder/actions/workflows/build-lobby.yml/dispatches \
        -H "Authorization: Bearer \${GITHUB_TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{"ref":"main"}'`
      ]
    },
    {
      path: "/github/speedcubing-top/mlgrush/build",
      run: [
        `curl -X POST https://api.github.com/repos/speedcubing-top/mc-server-image-builder/actions/workflows/build-mlgrush.yml/dispatches \
        -H "Authorization: Bearer \${GITHUB_TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{"ref":"main"}'`
      ]
    },
    {
      path: "/github/speedcubing-top/reduce/build",
      run: [
        `curl -X POST https://api.github.com/repos/speedcubing-top/mc-server-image-builder/actions/workflows/build-reduce.yml/dispatches \
        -H "Authorization: Bearer \${GITHUB_TOKEN}" \
        -H "Content-Type: application/json" \
        -d '{"ref":"main"}'`
      ]
    }
  ]
};
