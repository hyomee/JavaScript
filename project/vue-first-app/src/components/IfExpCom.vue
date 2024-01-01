<script setup>
    import { ref } from 'vue'    
    const num = ref(0);
    const isNumber = ref(true);
</script>

<!-- <script>
    export default {
        data() {
            return {
            num: 0,
            isNumber : true
            }
        }
    }
</script> -->

<template> 
    <button @click="isNumber = !isNumber">전환</button>
    <template v-if="isNumber">
        
        숫자 입력 : <input type="text"
           v-bind:value="num"
           @input="num = $event.target.value" />
        <p v-if="num == 0">숫자는 0 입니다.</p> 
        <p v-else-if="num > 0">숫자는 {{num}} , 양수</p>
        <p v-else-if="num < 0">숫자는 {{num}} , 음수</p>
        <p v-else>숫자가 아닙니다</p>
    </template>  
    <template v-else>        
        문자 : <input type="text"
           v-bind:value="num"
           @input="num = $event.target.value" /> {{num}}
    </template>     
</template>
 
