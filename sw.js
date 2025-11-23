self.addEventListener("install", event => {
  // Just activate immediately
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  clients.claim();
});
