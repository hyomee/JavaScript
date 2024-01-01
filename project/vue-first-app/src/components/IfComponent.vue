<script setup>
    import { ref } from 'vue'
    const isShow = true;
    const isIf = ref('A');
    const isToggle = ref(true);    
    const isTemplate = ref(true);
    const num = ref(0);
</script>

<template>
    <h1 v-show="isShow">showTest</h1>    
    <button @click="isToggle = !isToggle">전환</button>
    <label v-if="isToggle">조건 : {{  isToggle}}</label>
    <label v-else>조건 : {{  isToggle }}</label><br/>

    <input type="text"
           v-bind:value="isIf"
           @input="isIf = $event.target.value" /> {{  isIf }}
    <label v-if="isIf=='A'">조건 A</label>
    <label v-else-if="isIf=='B'">조건 B</label>
    <label v-else>조건 틀림</label>
    
    <input type="text"
           v-bind:value="num"
           @input="num = $event.target.value" /> {{  isIf }}
    <p v-if="num === 0">숫자는 {{num}} 입니다.</p> 
</template>
 
