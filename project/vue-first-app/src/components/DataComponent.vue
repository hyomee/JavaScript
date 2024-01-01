<!-- <script setup>     
    import { ref  } from 'vue'

    const mustcheMsg = "script script mustcheMsg 값 정의"
    const vbindMsg = ref ("Composition API v-bind ")
    const isDisabled = true;
    const status = 'valid';
    const isValid = true;
</script> -->

<!-- <script>    
    import { ref  } from 'vue'
    export default {   

        setup() {
            const mustcheMsg = "setup() mustcheMsg 값 정의";
            const vbindMsg = ref ("Composition API v-bind ");
            return {
                mustcheMsg,
                vbindMsg
            }
        }
    }    
</script>  -->

<script>    
    export default { 
        data() { 
            return {
                mustcheMsg: "Option API mustcheMsg 값 정의",
                vbindMsg: "Option API v-bind ",
                isDisabled: true, 
                status: 'valid',
                isValid: true
            }
        }
    }    
</script>

<template>
    <div>
        <h3>1. DataComponent.vue : 여기에 데이터 표시</h3> 
        <h3>2. 머스태시(Mustache) 바인딩 : {{ mustcheMsg }}</h3>
    </div>  
    <hr/>  
    <div>  
        <h3> v-bind 바인딩   </h3>            
        <input type="text" 
               v-bind:value="vbindMsg" 
               v-bind:disabled="isDisabled"
               @input="vbindMsg = $event.target.value" /> 
        <label v-bind:class="status">vbindMsg 값 : {{ vbindMsg }}</label> <br/><br/>
        <p v-bind:class="isValid ? 'valid' : 'invalid'">vbindMsg 값 : {{ vbindMsg }}</p>  
        <p v-bind:class="['bold', 'italic', isValid ? 'valid' : 'invalid']">배열 바인딩 </p> 
        <p v-bind:class="{
            bold: true 
        }">객체 Binding</p> 
    </div>   
</template>


<style scoped>    
    .valid   { color: rgb(172, 115, 10) }
    .invalid { color: rgb(123, 20, 220) }
    .bold    { font-weight: bolder }
    .italic  { font-style:  italic }
</style>
