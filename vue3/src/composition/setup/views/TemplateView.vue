<template>
    <div>
        <h3>== 템플릿 문법 == </h3>
        머스태시[Mustache"(이중 중괄호)"] ref :: {{ messageRef }} <br/>
        머스태시[Mustache"(이중 중괄호)"] :: {{ message }}
    </div>
</template>

<script>  
    import { ref } from 'vue' 
       
    export default {        
        data : () => {
            const messageRef = ref("메세지 Ref");
            const message = "메세지";

            return {
                messageRef,
                message
            }
        }         
    }  
        
</script>
