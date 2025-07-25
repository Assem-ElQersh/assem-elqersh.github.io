// Enhanced Service Worker for Assem ElQersh Portfolio
const CACHE_NAME = 'assem-portfolio-v4';
const STATIC_CACHE = 'static-v4';
const DYNAMIC_CACHE = 'dynamic-v4';
const IMAGE_CACHE = 'images-v4';

// Critical resources for instant loading
const criticalAssets = [
  '/',
  '/index.html',
  '/css/style.css',
  '/css/normalize.css',
  '/js/main.js',
  '/js/projects.js',
  '/img/profile.jpg',
  '/img/preview.png'
];

// Non-critical resources
const staticAssets = [
  '/css/font-root-styles/general-sans.css',
  '/css/font-root-styles/okinesans.css',
  '/css/font-root-styles/satoshi.css',
  '/404.html'
];

// Large images to cache on demand
const imageAssets = [
  '/img/medflow.png',
  '/img/real-time face detection.png',
  '/img/face mask detection.png',
  '/img/personal assistant system.png',
  '/img/object detection applications.png'
];

// Install event - Cache critical resources immediately
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      // Cache critical assets first
      caches.open(STATIC_CACHE).then(cache => {
        console.log('Caching critical assets');
        return cache.addAll(criticalAssets);
      }),
      // Cache static assets
      caches.open(STATIC_CACHE).then(cache => {
        console.log('Caching static assets');
        return cache.addAll(staticAssets);
      })
    ]).then(() => {
      // Skip waiting to activate immediately
      return self.skipWaiting();
    })
  );
});

// Activate event - Clean old caches and claim clients
self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      // Clean old caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (!cacheName.includes('v4')) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Claim all clients immediately
      self.clients.claim()
    ])
  );
});

// Enhanced fetch strategy
self.addEventListener('fetch', event => {
  const { request } = event;
  
  // Skip non-HTTP requests
  if (!request.url.startsWith('http')) {
    return;
  }

  // Handle different resource types with optimal strategies
  if (request.destination === 'document') {
    // HTML - Network first with cache fallback
    event.respondWith(handleDocumentRequest(request));
  } else if (request.destination === 'style' || request.destination === 'script') {
    // CSS/JS - Cache first
    event.respondWith(handleStaticRequest(request));
  } else if (request.destination === 'image') {
    // Images - Cache with compression awareness
    event.respondWith(handleImageRequest(request));
  } else {
    // Other resources - Stale while revalidate
    event.respondWith(handleOtherRequest(request));
  }
});

// Document request handler (HTML)
async function handleDocumentRequest(request) {
  try {
    // Try network first for fresh content
    const networkResponse = await fetch(request);
    
    // Cache the response
    const cache = await caches.open(STATIC_CACHE);
    cache.put(request, networkResponse.clone());
    
    return networkResponse;
  } catch (error) {
    // Network failed, try cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Show 404 page if nothing found
    return caches.match('/404.html');
  }
}

// Static assets handler (CSS/JS)
async function handleStaticRequest(request) {
  // Cache first strategy for static assets
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    
    // Cache the response
    const cache = await caches.open(STATIC_CACHE);
    cache.put(request, networkResponse.clone());
    
    return networkResponse;
  } catch (error) {
    console.log('Failed to fetch static asset:', request.url);
    throw error;
  }
}

// Image request handler with WebP support
async function handleImageRequest(request) {
  // Check if browser supports WebP
  const acceptsWebP = request.headers.get('accept')?.includes('webp');
  
  // Try to serve WebP version if supported
  if (acceptsWebP && !request.url.includes('.webp')) {
    const webpUrl = request.url.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const webpRequest = new Request(webpUrl, request);
    
    try {
      const webpResponse = await caches.match(webpRequest) || await fetch(webpRequest);
      if (webpResponse && webpResponse.ok) {
        // Cache the WebP version
        const cache = await caches.open(IMAGE_CACHE);
        cache.put(webpRequest, webpResponse.clone());
        return webpResponse;
      }
    } catch (error) {
      // WebP failed, fall through to original image
    }
  }
  
  // Handle original image request
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    
    // Only cache successful responses
    if (networkResponse && networkResponse.status === 200) {
      const cache = await caches.open(IMAGE_CACHE);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Failed to fetch image:', request.url);
    throw error;
  }
}

// Other resources handler
async function handleOtherRequest(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    // Cache the response
    const cache = await caches.open(DYNAMIC_CACHE);
    cache.put(request, networkResponse.clone());
    
    return networkResponse;
  } catch (error) {
    // Network failed, try cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    throw error;
  }
}

// Background sync for offline actions
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle any offline actions when connection is restored
  console.log('Background sync triggered');
}

// Push notifications (if needed in future)
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/img/favicon/android-chrome-192x192.png',
      badge: '/img/favicon/android-chrome-192x192.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
      }
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Message handler for cache management
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(DYNAMIC_CACHE).then(cache => {
        return cache.addAll(event.data.payload);
      })
    );
  }
}); 