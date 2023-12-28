const CACHE_NAME = 'abacus-pwa'; // 캐시제목 선언
const CACHE_LIST = [ // 캐시할 파일 선언
  '/pwa',
  '/pwa/index.html',
  '/pwa/manifest.json',
  '/pwa/images/iabacus_logo.png',  
  '/pwa/images/iabacus_logo_00.png'
];

// 2.서비스워커를 설치하고 캐시를 저장함
self.addEventListener('install', event => {
  console.log('서비스워커 설치함!'); 
  event.waitUntil (
    (async() => {
        try {
            const cache = await caches.open(CACHE_NAME);
            cache.addAll(CACHE_LIST);

            const skip = self.skipWaiting();
        }
        catch{
            console.log("error occured while caching...")
        }
    })()
  );
  console.log('서비스워커 설치함!!!!');
});

// 3. 고유번호 할당받은 서비스 워커 동작 시작
self.addEventListener('activate', event => {
  console.log('서비스워커 동작 시작됨!');
  
  (async () => {

    const cache_keys = await caches.keys()
    console.log(cache_keys)

    cache_keys.forEach(
        key => {
            if (key !== CACHE_NAME) {
                console.log("Service Worker 오래된 cache 삭제!")
                return caches.delete(key)
                
            }
        }
    )
    return Promise.all(cache_keys)


})()
});

// 4.데이터 요청시 네트워크 또는 캐시에서 찾아 반환 
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => {
      if (!response) {
        console.log("네트워크에서 데이터 요청!", event.request)
        return fetch(event.request);
      }
      console.log("캐시에서 데이터 요청!", event.request)
      return response;
    }).catch(err => console.log(err))
  );
});



// self.addEventListener("fetch", (event) => {
//   console.log("Service Worker : fetch!")
//   event.respondWith(
//       // we are sending the request to the server. if network is down, then sending the res
//       // from the cache.
//       fetch(event.request)
//       .catch(() => {
//           caches.match(event.request)
//       })
      
//   )
// })