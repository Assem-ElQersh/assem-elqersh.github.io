// Service Worker for Assem ElQersh Portfolio
const CACHE_NAME = 'assem-portfolio-v3';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/css/normalize.css',
  '/css/font-root-styles/general-sans.css',
  '/css/font-root-styles/okinesans.css',
  '/css/font-root-styles/satoshi.css',
  '/js/main.js',
  '/img/profile.jpg',
  '/img/preview.png',
  '/img/medflow.png',
  '/img/real-time face detection.png',
  '/img/face mask detection.png',
  '/img/personal assistant system.png',
  '/img/object detection applications.png',
  '/img/Sign-to-Text-Translation-System.png',
  '/img/news-lies.png',
  '/img/rock-paper-scissors.png',
  '/img/color-identifier.png',
  '/img/github.svg',
  '/img/linkedin.svg',
  '/img/gmail.svg',
  '/img/x.svg',
  '/Assem_ElQersh - CV - AI.pdf',
  '/Assem_ElQersh - CV - SE.pdf',
  '/404.html'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        
        return fetch(event.request).then(response => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(() => {
          // If both cache and network fail, show 404 page
          if (event.request.destination === 'document') {
            return caches.match('/404.html');
          }
        });
      })
  );
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 