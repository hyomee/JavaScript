<script setup>
  import { ref } from 'vue';
  import Component_00 from '@/components/rtComponent/Component_00.vue';
  import Component_01 from '@/components/rtComponent/Component_01.vue';
  import ComponentReUse from '@/components/rtComponent/ComponentReUse.vue';

  const customers = ref([
    { 
      id : 1, 
      name: '홍길동',
      phone: '010 9321 1234',
      email: 'hong01@gmail.com',
      address: '서울 송파구 잠실동'
    },
    { 
      id : 2, 
      name: '김바둑',
      phone: '010 7239 2345',
      email: 'kim01@gmail.com',
      address: '서울 송파구 삼전동'
    }
  ]);

  const isDetailVisible = ref(true)

</script>

<template>
    <component_00 />
    <component_01 />
    <div class="container  w-50 p-2" >
        <h1 class="m-2 p-2  mb-1 bg-secondary text-white">Component ReUse</h1>
        <ul class="container list-group list-unstyled ">
            <component-re-use                                
                isDetailVisible
                v-for="customer in customers"
                :key = "customer.id"
                :customer= customer
                 ></component-re-use> 
        </ul>
    </div>
</template>


<!--   -->