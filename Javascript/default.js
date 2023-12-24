import {user} from './data.js';

const helloMessage = "안녕하세요";
user.name = "김길동"

export function fnHelloMsg () {
    return `${user.name}님 ${helloMessage}`;
}
 