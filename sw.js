// minimal service worker: makes Chrome treat the site as installable; network-first, no offline caching of data
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => { e.respondWith(fetch(e.request).catch(() => new Response('', {status: 503}))); });
