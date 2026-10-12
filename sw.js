self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Manejo de peticiones de red por defecto para la PWA
});
