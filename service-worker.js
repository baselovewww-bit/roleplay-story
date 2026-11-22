const CACHE='roleplay-story-v1';
const FILES=['./','./index.html','./manifest.webmanifest','./icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match('./index.html'))))});
const CACHE = 'roleplay-story-v2';

const FILES = [

  './',

  './index.html',

  './manifest.webmanifest',

  './icon.svg'

];

self.addEventListener('install', event => {

  event.waitUntil(

    caches.open(CACHE).then(cache => cache.addAll(FILES))

  );

});

self.addEventListener('activate', event => {

  event.waitUntil(

    caches.keys().then(keys =>

      Promise.all(

        keys

          .filter(key => key !== CACHE)

          .map(key => caches.delete(key))

      )

    )

  );

  self.clients.claim();

});

self.addEventListener('fetch', event => {

  if (event.request.method !== 'GET') return;

  event.respondWith(

    caches.match(event.request).then(cached => {

      if (cached) return cached;

      return fetch(event.request).then(response => {

        const copy = response.clone();

        caches.open(CACHE).then(cache =>

          cache.put(event.request, copy)

        );

        return response;

      });

    })

  );

});
