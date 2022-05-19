self.addEventListener('fetch', (event) =>{
    if (!self.navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((response) => {
                return caches.match('/offline.html')
            })
        )
    }
})


