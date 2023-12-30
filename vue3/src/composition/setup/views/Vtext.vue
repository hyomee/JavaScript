<template>
    <div>
        <h3>=== v-text ===</h3>
        <span v-text = "vtextMsg"></span>  
    </div>
</template>

<script>
    export default {
        data() { 
            return {
                vtextMsg: ''
            }
        },
        setup() {
            const vtextMsgSetup = " 텍스트 속성 설정으로 해당 tag의 값을 변경";

            return {
                vtextMsgSetup
            }
        }, 

        mounted() { 
            this.vtextMsg = `${this.vtextMsgSetup} data 정의`;
        } 

    }
</script>