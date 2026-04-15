const CACHE_NAME = "lu-reviewer-app-v3";
const SCOPE_PATH = new URL(self.registration.scope).pathname;
const SHELL_URLS = [SCOPE_PATH, `${SCOPE_PATH}index.html`, `${SCOPE_PATH}manifest.webmanifest`];

const normalizePath = (path) => {
  if (!path.startsWith("/")) return `/${path}`;
  return path;
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(SHELL_URLS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type !== "CACHE_URLS" || !Array.isArray(event.data.urls)) return;
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.allSettled(
        event.data.urls
          .filter((url) => typeof url === "string")
          .map((url) => cache.add(normalizePath(url))),
      ),
    ),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") return;

  const url = new URL(request.url);

  if (url.origin !== self.location.origin || url.pathname.startsWith("/api/")) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response && response.ok && response.type === "basic") {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      })
      .catch(async () => {
        const cached = await caches.match(request);
        if (cached) return cached;
        if (request.mode === "navigate") {
          return await caches.match("/") ?? await caches.match("/index.html") ?? new Response("LU Reviewer could not load this page yet.", { status: 503 });
        }
        return new Response("Resource is not available yet.", { status: 503 });
      }),
  );
});