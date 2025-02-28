async function loadServer() {
  const serverModule = await import(
    "../dist/social-media-app/server/server.mjs"
  );
  return serverModule.app;
}

export default loadServer().then((app) => app());
