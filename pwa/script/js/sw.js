const CACHE_NAME = 'abacus-pwa'; // 캐시제목 선언
const CACHE_LIST = [ // 캐시할 파일 선언
  '/pwa',
  '/pwa/index.html',
  '/pwa/manifest.json',
  '/pwa/images/iabacus_logo.png',  
  '/pwa/images/iabacus_logo_00.png'
];


// 서비스 워커 install : 리소스를 cache 에 저장
const fnAddCache = async () => {
  try {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll(CACHE_LIST);
      const skip = self.skipWaiting();
  } catch{
      console.log("error occured while caching...")
  }
};


const fnPutCache = async (request, response) => {
  const cache = await caches.open(CACHE_NAME);
  await cache.put(request, response);
};

// 서비스 워커  activate : 리소스 reload 로 브라우저 호환성 체크 필요 
const fnEnableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    // Enable navigation preloads!
    await self.registration.navigationPreload.enable();
  }
};

// 서비스 워커  activate : 리소스 reload 캐시 명 변경 시 update
const fnActivate = async () => {
  const cache_keys = await caches.keys();

  console.log(`cache ::  ${cache_keys}`);

  cache_keys.forEach( key => {
          if (key !== CACHE_NAME) {
              console.log("Service Worker 오래된 cache 삭제!")
              return caches.delete(key)
              
          }
      }
  );

  return Promise.all(cache_keys);
};

const fnCacheMatch = async (request) => {
  return await caches.match(request);
};


const fnPreloadResponseMatch = async (preloadResponsePromise) => {
  const preloadResponse = await preloadResponsePromise;
  if (preloadResponse) {
    console.info('using preload response', preloadResponse);
    putInCache(request, preloadResponse.clone());
    return preloadResponse;
  }
  return preloadResponse;
};

const fnServerFetch = async () => {
  const responseFromNetwork = await fetch(request.clone()); 
  fnPutCache(request, responseFromNetwork.clone());
  return responseFromNetwork;
};


// 데이터 요청에 따른 처리
const fnCacheFirst = async ({request, preloadResponsePromise, fallbackUrl}) => {

  // 캐시 우선 조회
  const responseFromCache = fnCacheMatch(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  // preloaded response 응답
  const preloadResponse = await fnPreloadResponseMatch(preloadResponsePromise);
  if (preloadResponse) { 
    return preloadResponse;
  }

  // 서버 응답
  try {
    return await fnServerFetch(request);
  } catch (error) {

    // 서버에 없으면 대신 참조할 정보 
    if (fallbackUrl) {
      const fallbackResponse = await fnCacheMatch(fallbackUrl);
      if (fallbackResponse) {
        return fallbackResponse;
      }
    }
    
    // 최종 오류 
    return new Response('Network error happened', {
      status: 408,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}

// 데이터 요청에 따른 처리
const fnServerFirst = async ({ request }) => {

  const responseFromServer = await fnServerFetch(request.clone());
  if (responseFromServer) { 
    return responseFromServer;
  };

  // Cache 응답
  const responseFromCache = await fnCacheMatch(request);
  if (responseFromCache) {
    return responseFromCache;
  };

  // 없으면 에러 처리 
  return new Response('Network error happened', {
    status: 408,
    headers: { 'Content-Type': 'text/plain' },
  })
}

// 2.서비스워커를 설치하고 캐시를 저장함
self.addEventListener('install', event => {
  console.log('서비스워커 : 설치(install)!'); 

  event.waitUntil ( fnAddCache() ) 
});

// 3. 고유번호 할당받은 서비스 워커 동작 시작
self.addEventListener('activate', event => {
  console.log('서비스워커 : 시작(activate)'); 

  event.waitUntil ( fnActivate()) ;
  // event.waitUntil(fnEnableNavigationPreload());
});

// 4.데이터 요청시 네트워크 또는 캐시에서 찾아 반환 
self.addEventListener('fetch', event => {
  console.log("서비스 워커 : fetch!");
  // 서버 우선 
  // event.respondWith( fnServerFirst( {
  //     request: event.request
  //   })
  // );

  // cache 우선 
  event.respondWith( fnCacheFirst( {    
      request: event.request,
      preloadResponsePromise: event.preloadResponse
      // fallbackUrl: './gallery/myLittleVader.jpg',
    })
  );

});


