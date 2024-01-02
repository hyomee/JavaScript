<script setup>
    import {ref} from 'vue'

    const cnt = ref(0);
    const methodHandlerCnt = ref(0);
    const helloMsg = ref('');

    const fnAddCnt = function() {
        return this.methodHandlerCnt++;
    }  

    const fnHello = function(msg) {
        return this.helloMsg = msg;
    } ;
    
</script>
<template>
    <div>
        <h1>이벤트 핸드링</h1>
        <p v-once>초기값 cnt : {{ cnt }}</p>
        <table>
            <tr>
                <td><button v-on:click="cnt++">인라인 핸들러 추가</button></td>
                <td>숫자 값은: {{ cnt }}</td>
            </tr>
            <tr>
                <td><button @click="fnAddCnt()">script setup 메서드핸들러 추가</button> </td>
                <td> 숫자 값은: {{ methodHandlerCnt }}</td>
            </tr>
            <tr>
                <td><button @click="fnHello('홍길동')">파라메터 전달</button> </td>
                <td> {{ helloMsg }} 안녕</td>
            </tr>
            <tr>
                <td><button v-on:click="fnHello('홍길동'), fnAddCnt()">여러 이벤트</button> </td>
                <td> {{ helloMsg }} 안녕 ,  methodHandlerCnt {{ methodHandlerCnt }}</td>
            </tr>
        </table>    
    </div>
</template>

<!--
<script>
    import {ref} from 'vue' 
    export default {
        // Compsition API
        setup() {
            const methodHandlerCnt = ref(0);

            const fnAddCnt = function() {
                return this.methodHandlerCnt++;
            } 

            return {
                methodHandlerCnt,
                fnAddCnt
            }
        },

        // Option API
        data() {
            return {
                methodHandlerOptionCnt: 0
            }
        },
        methods: {
            fnOptionAddCnt() {  
                return this.methodHandlerOptionCnt++;
            }
        }
    }    
</script>
<template>
    <div>
        <h2>이벤트 핸드링</h2>  
        <table>
            <tr>
                <td><button @click="fnAddCnt">setup() 추가</button></td>
                <td>숫자 값은: {{ methodHandlerCnt }}</td>
            </tr>
            <tr>
                <td><button @click="fnOptionAddCnt">Option API :  추가</button></td>
                <td>숫자 값은: {{ methodHandlerOptionCnt }}</td>
            </tr>
        </table>      
    </div>
</template>
-->