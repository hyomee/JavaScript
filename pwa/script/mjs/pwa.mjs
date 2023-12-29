const fnLoadPwd = async () => {
    try {
        const registration = await navigator.serviceWorker
            .register('./script/js/sw.js');
        
        if (registration.installing) {
            console.log("서비스 워커 :  installing");
        } else if (registration.waiting) {
            console.log("서비스 워커 : installed");
        } else if (registration.active) {
            console.log("서비스 워커 : active");
        }
    } catch ( error ) {
        console.error(`서비스 워커 등록 오류 : ${error}`);
    }
    
};

const fnRegisterPwa = ()=> {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', fnLoadPwd());        
    } else {
        console.log('PWA를 지원하지 않는 브라우저 입니다.');
    }
};


export default fnRegisterPwa;