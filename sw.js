const CACHE_NAME = 'tirelire-v4'; //[span_3](start_span)[span_3](end_span)

self.oninstall = () => self.skipWaiting(); //[span_4](start_span)[span_4](end_span)

self.onactivate = (e) => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))); //[span_5](start_span)[span_5](end_span)
  self.clients.claim(); //[span_6](start_span)[span_6](end_span)
};

self.onfetch = (e) => e.respondWith(fetch(e.request).catch(() => caches.match(e.request))); //[span_7](start_span)[span_7](end_span)
