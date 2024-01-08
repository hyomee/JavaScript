<script setup>
  import { ref } from 'vue';

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

  const isDetailVisible = ref(false);

  const fnToggleDetail = function() {
    console.log(this.isDetailVisible);
    this.isDetailVisible = !this.isDetailVisible;
    console.log(this.isDetailVisible);
  }
</script>
<template>   
  <div class="container  w-50 p-2" >
    <h1 class="m-2 p-2  mb-1 bg-secondary text-white">v-for 변경</h1>
    <ul class="container list-group list-unstyled  ">
      <li class="border-3  border-bottom"
          v-for="customer in customers" :key="customer.id">
        <h2 class="p-1 text-center fw-bold">{{customer.name}}</h2> 
        <button type="button"
                class="btn btn-primary btn-sm"
                @click="fnToggleDetail()">
                상세정보 {{isDetailVisible ? '숨기기' : '보기'}}
        </button>
        <ul class="list-unstyled" v-if="isDetailVisible">
          <li><strong>전화번호:</strong>{{customer.phone}}</li>
          <li><strong>이메일:</strong>{{customer.email}}</li>
          <li><strong>주소:</strong>{{customer.address}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>