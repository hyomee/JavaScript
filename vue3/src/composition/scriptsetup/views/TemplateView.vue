<template>
    <div>
        <h3>== 템플릿 문법 == </h3>
        머스태시[Mustache"(이중 중괄호)"] :: {{ messageRef }} <br/>
        머스태시[Mustache"(이중 중괄호)"] :: {{ message }}
    </div>
</template>

<script setup>    
    import { ref } from 'vue' 
    
    const messageRef = ref(" 메세지 REF");
</script>

<script>
    export default {
        data: () => {
            return {
                message:"메세지"
            }
        } 
    }
</script>
