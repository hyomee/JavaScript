const fnLoadPwd = () => {
    navigator.serviceWorker
            .register('./script/js/service_worker.js')
            .then((msg)=> {
                console.log('서비스 워커 등록 :: ' + msg);
            })
            .catch((errMsg)=> {
                console.log('서비스 워커 미 등록 ::' + errMsg);
            });
};

const fnRegisterPwa = ()=> {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', fnLoadPwd());        
    } else {
        console.log('PWA를 지원하지 않는 브라우저 입니다.');
    }
};


export default fnRegisterPwa;