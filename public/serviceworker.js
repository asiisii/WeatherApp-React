 const cacheName = 'version-1'
 const urlsToCache = [ 'index.html', 'offline.html']
 //install service worker
 this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        console.log(cache);
        console.log('Opened cache');
        return cache.addAll(urlsToCache)
      })
  )
 })
// listen for request
self.addEventListener('fetch', (event) => {
  event.respondWith(
    //match all the request that pg is receiving-like show img, api calls
    caches.match(event.request)
      .then(() => {
        //for all the request fetch them again
        return fetch(event.request)
        //if no internet we will get to catch 
          .catch(() => caches.match('offline.html'))
      })
  )
})
//activate the service worker
self.addEventListener('activate', (event) => {
  // activating the even listener
  // gonna have all version of cache, things will get change so we dont wann store those
  // so on activation we need to clear all the previous caches 

  event.waitUntil(
    caches.keys()
      .then(cacheNames => Promise.all(
        cacheNames.map(cache => {
          if (cacheName !== cache) {
            return caches.delete(cache)
          }
        })
      ))
  )
})