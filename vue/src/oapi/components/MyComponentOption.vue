<template>
  <h1>{{ propMsg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>   
    <p>
      Edit
      <code>components/MyComponentOption.vue</code> 
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      msg: {
        type: String,
        default: "자식 vue"
      }
    },
    // data() { ... };
    data: function() {
      return {
        propMsg: this.msg,
        count : 0
      }
    },

    // 생명 주기
    beforeCreate() {       
      console.log(`beforeCreate() : 
        인스턴스가 초기화된 후 호출 :
        this.count = ${this.count}`); 
    },

    created() { 
      console.log(`created() : 
        인스턴스가 모든 상태 관련 옵션 처리를 완료한 후 호출:
        this.count = ${this.count}`); 
    },

    beforeMount() { 
      console.log(`beforeMount() : 
        컴포넌트가 마운트되기 직전 호출:
        this.count = ${this.count}`); 
    },

    mounted() {
      console.log(`mounted() : 
      컴포넌트가 마운트된 후 호출 :
      ${this.count}`);
    },

    beforeUpdate() { 
      console.log(`beforeUpdate() : 
        반응형 상태 변경에 의한 컴포넌트 DOM 트리 업데이트 직전 호출:
        this.count = ${this.count} `);
    },

    updated() { 
      console.log(`updated() : 
        반응형 상태 변경에 의한 컴포넌트 DOM 트리 업데이트 후 호출:
        this.count = ${this.count} `);
    },

    beforeUnmount() { 
      console.log(`beforeUnmount() : 
        컴포넌트 인스턴스가 마운트 해제되기 직전 호출:
        this.count = ${this.count} `);
    },

    unmounted() { 
      console.log(`unmounted() : 
        컴포넌트가 마운트 해제된 후 호출: 
        this.count = ${this.count} `);
    } ,

    beforeDestroy: function() {
      console.log(`beforeDestroy() : 
        뷰 인스턴스가 제거되기 직전에 호출되는 단계:
        this.count = ${this.count}  `);
    },
     
    destroyed: function() {
      console.log(`destroyed() : 
        뷰 인스턴스가 제거되고 나서 호출되는 단계:
        this.count = ${this.count} `);
    }
  }
                              
</script>

<style scoped> 
</style>