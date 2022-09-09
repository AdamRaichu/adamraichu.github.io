const cacheName = 'c';
const filesToCache = [
  // in general
  '/favicon.ico',
  // /index.html
  '/',
  '/index.html',
  '/main.css',
  '/images/maze.png',
  '/images/snake.png',
  // games/maze/index.html
  '/games/maze/',
  '/games/maze/index.html',
  '/console.js',
  '/games/maze/maps.js',
  '/games/maze/constructor.js',
  '/popup.js',
  '/games/maze/load.js',
  '/games/maze/footer.js',
  '/games/maze/style.css',
  '/popup.css',
  '/images/bricks.png',
  '/images/key.png'
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