const cacheName = 'c';
const filesToCache = [
  '/',
  '/images/maze.png',
  '/images/snake.png',
  '/main.css',
  '/index.html'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('activate', e => self.clients.claim());

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(response => response ? response : fetch(e.request))
  )
});