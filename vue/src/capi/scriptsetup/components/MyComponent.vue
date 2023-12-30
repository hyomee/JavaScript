<template>
  <h1>{{ propMsg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>   
    <p>
      Edit
      <code>components/MyComponent.vue</code> 
    </p>
  </div>
  <div>
   {{ message }}
  </div>
</template>

<script setup>
  import { ref, defineProps } from 'vue'             

  import { onBeforeMount, onMounted  } from 'vue'
  import { onBeforeUpdate, onUpdated } from 'vue'
  import { onBeforeUnmount,  onUnmounted } from 'vue'

  const props = defineProps({                        
    msg: String,
  })

  const propMsg = ref(props.msg) ;                    
  const count = ref(0) ;
  

  onBeforeMount(() => {
    console.log(`Composition API : onBeforeMount ::
    count.value = ${count.value}`);   
  });

  
  onMounted(() => {
    console.log(`Composition API : onMounted ::  
    count.value = ${count.value}`); 
  });
  
  onBeforeMount(() => {
    console.log(`Composition API : onBeforeMount ::
    count.value = ${count.value}`);   
  });

  // 생명 주기 훅
  onMounted(() => {
    console.log(`Composition API : onMounted ::  
    count.value = ${count.value}`); 
  });

  onBeforeUpdate(() => {    
    console.log(`Composition API : onBeforeUpdate ::
    oldCount.value = ${count.value}`);  
  });

  onUpdated(() => {
    console.log(`Composition API : onUpdated ::
    count.value = ${count.value}`);  
  });

  onBeforeUnmount(() => {
    console.log(`Composition API : onBeforeUnmount
    count.value = ${count.value}`); 
  });

  onUnmounted(() => {
    console.log(`Composition API : onUnmounted ::
    count.value = ${count.value}`);   
  }); 

</script>

<style scoped> 
</style>