<template>
  <MyComponent msg="Vue 3 학습 Option API" /> 
  <TemplateView />  
  <Vtext />
</template>

<script>

  import MyComponent from './views/MyComponent.vue' 
  import TemplateView from './views/TemplateView.vue'  
  import Vtext from './views/Vtext.vue'

  export default {
    components: {
      MyComponent,
      TemplateView,
      Vtext
    }
  } 

</script>

<style scoped>
</style>