export default {
  webhooks: [
    {
      path: "/webhook1",
      run: [
        `curl --version`
      ]
    }
  ]
};
