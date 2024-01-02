<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import DataComponent from './components/DataComponent.vue'
  import IfComponent from './components/IfComponent.vue'
  import IfExpCom from './components/IfExpCom.vue'
  import ListCom from './components/ListCom.vue'
  import ForifTempCom from './components/ForifTempCom.vue'
  import EventComponent from './components/EventComponent.vue'

</script>

<!-- <script>
  import HelloWorld from './components/HelloWorld.vue'  
  import DataComponent from './components/DataComponent.vue'
  import DataComponent from './components/IfComponent.vue'
  import IfExpCom from './components/IfExpCom.vue'
  import ListCom from './components/ListCom.vue'
  export default {
    components:  {
      HelloWorld,
      DataComponent,
      IfComponent,
      IfExpCom,
      ListCom
    },
    setup() {

    }
  }
</script> -->

<!-- <script>
  import HelloWorld from './components/HelloWorld.vue'  
  import DataComponent  from './components/DataComponent.vue' 
  import IfComponent from './components/IfComponent.vue'
  import IfExpCom from './components/IfExpCom.vue'
  import ListCom from './components/ListCom.vue'
  export default {
    components:  {
      HelloWorld,
      DataComponent ,
      IfComponent,
      IfExpCom,
      ListCom
    }
  }
</script> -->

<template>
  <HelloWorld msg="Vite + Vue 첫번째 예제" />
  <data-component />
  <hr/>
  <if-component /><hr/>
  <if-exp-com /><hr/>
  <list-com />
  <forif-tempCom /> 
  <event-component />
</template>

<style scoped>
</style>
