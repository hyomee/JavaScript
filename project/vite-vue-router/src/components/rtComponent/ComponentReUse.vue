<script setup>
    import {  ref , defineEmits    } from 'vue';
    import {  watch, getCurrentInstance  } from 'vue';

    // props 불변 이다,. vue는 단방향이다.
    const props = defineProps({                    
        isDetailVisible: {
            type: Boolean,   
            required: true, 
            default: false
        },      
        customer: {
            id: {
                type: Number,
                required: true
            } 
        }
    }) 

   
    const isDetailVisibleRef = ref(props.isDetailVisible); 

    const fnToggleDetail = ()=> {   
       isDetailVisibleRef.value = !isDetailVisibleRef.value;  
    } 

    const fnChangeDetailVisibleRef = (value)=> {   
        isDetailVisibleRef.value = value
    }; 
   

    // 자식 -> 부모로 전달 
    // const { emit } = getCurrentInstance();
    const emit = defineEmits(['toggle-detail-visible'])

    const fnEmit = ()=> {
        emit('toggle-detail-visible'); 
    }

    watch(props, (newValue, oldValue) => { 
        fnChangeDetailVisibleRef(newValue.isDetailVisible);
    })
        

</script>
<template>    
    <li class="border-3 m-1  border-bottom" >
        <h2 class="p-1 text-center fw-bold">{{customer.name}}</h2> 
        <button type="button"
                class="btn btn-primary btn-sm m-1"
                @click="fnToggleDetail">
                상세정보 {{isDetailVisibleRef ? '숨기기' : '보기'}}
        </button>
        <button type="button"
                class="btn btn-primary btn-sm m-1"
                @click="fnEmit()">
                전체감추기 {{isDetailVisibleRef ? '숨기기' : '보기'}}
        </button> 
        <ul class="list-unstyled " v-if="isDetailVisibleRef">
            <li><strong>전화번호:</strong> {{customer.phone}}</li>
            <li><strong>이메일:</strong> {{customer.email}}</li>
            <li><strong>주소:</strong>{{customer.address}}</li>
        </ul>
    </li>  
</template>