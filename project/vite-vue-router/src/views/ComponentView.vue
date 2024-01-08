<script setup>
  import { ref, reactive } from 'vue';
  import Component_00 from '@/components/rtComponent/Component_00.vue';
  import Component_01 from '@/components/rtComponent/Component_01.vue';
  import ComponentReUse from '@/components/rtComponent/ComponentReUse.vue';
  import ComponentForm from '@/components/rtComponent/ComponentForm.vue'
  import { fnDeepCopy } from '@/module/CopyUtils.js'

  const customers = reactive([
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

 

  const isDetailVisible = ref(true);

  const fnToggleDetailVisible = function() {
      isDetailVisible.value = !isDetailVisible.value;
  }

  // 고객 정보 처리 
  const fnProcessCustomer = (pCustomer)=>{
    const customer = fnDeepCopy(pCustomer) 
    customer.id = Math.max(...customers.map(customer => customer.id)) + 1;
    customers.push(customer);
    console.log(customer);
 
  }


</script>

<template>
    <component_00 />
    <component_01 />
    
    <div class="container  w-50 p-2" >
        <h1 class="m-2 p-2  mb-1 bg-secondary text-white">Component ReUse</h1>
        <component-form
          @add-customer="fnProcessCustomer" />
        <div class="card p-1 m-1">
          <h5 class="card-header  text-white bg-success ">고객 목록 </h5>
          <ul class="card-body list-group list-unstyled ">
              <component-re-use                           
                  :isDetailVisible = isDetailVisible
                  v-for="customer in customers"
                  :key = "customer.id"
                  :customer= customer 
                  @toggle-detail-visible="fnToggleDetailVisible"></component-re-use> 
          </ul>
        </div>
    </div>
</template>
