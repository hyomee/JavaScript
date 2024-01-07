<script setup>
    import { defineProps, ref } from 'vue';

    // props 불변 이다,. vue는 단방향이다.
    defineProps({                    
        isDetailVisible: {
            type: Boolean,    
            dafault: false
        },        
        customer: {
            id: {
                type: Number,
                required: true
            },
            name: String,        
            phone: String,        
            email: String,
            address: String
        },    
    })

//   const customer = ref( 
//     { 
//       id : 1, 
//       name: '홍길동',
//       phone: '010 9321 1234',
//       email: 'hong01@gmail.com',
//       address: '서울 송파구 잠실동'
//     });

  console.log("root" + this.isDetailVisible);
  console.log("root" + this.customer);
//   const isDetailVisibleRef = toRef(this.is-DetailVisible);

//   const fnToggleDetail = function() { 
//     this.isDetailVisibleRef = !this.isDetailVisibleRef; 
//   }
</script>
<template>    
  <!-- <li class="border-3  border-bottom" >
    <h2 class="p-1 text-center fw-bold">{{customer.name}}</h2> 
    <button type="button"
            class="btn btn-primary btn-sm"
            @click="fnToggleDetail()">
            상세정보 {{isDetailVisibleRef ? '숨기기' : '보기'}}
    </button>
    <ul class="list-unstyled" v-if="isDetailVisible">
        <li><strong>전화번호:</strong>{{customer.phone}}</li>
        <li><strong>이메일:</strong>{{customer.email}}</li>
        <li><strong>주소:</strong>{{customer.address}}</li>
    </ul>
    </li> -->
</template>