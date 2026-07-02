self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Membenarkan aplikasi berfungsi secara dalam talian dengan Firebase
  event.respondWith(fetch(event.request));
});
