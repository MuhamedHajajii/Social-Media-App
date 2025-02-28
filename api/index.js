export default async function handler(req, res) {
  const { default: app } = await import(
    "../dist/social-media-app/server/server.mjs"
  );

  console.log(app); // Log the imported module

  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    app(req, res, parsedUrl);
  });

  return server.emit("request", req, res);
}
