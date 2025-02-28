export default async function handler(req, res) {
  const { default: app } = await import(
    "../dist/social-media-app/server/server.mjs"
  );
  return app(req, res);
}
