/**
 * 입력 FORM Component
 **/
<script setup>
    import { defineEmits, reactive } from 'vue'

    // Data 선언
    const customer = reactive({
        name: '',
        phone: '',
        email: '',
        address: ''
    })
    // 저장 ( 신규, 변경 )을 하기 위한 emit 선언
    const addEmit = defineEmits(['add-customer'])

    // 부모로 데이터를 전달한다.
    const fnEmit = ()=>{
        addEmit('add-customer', customer);
        Object.keys(customer).forEach(key => {
            customer[key] = ''; 
        }); 
    }

</script>

<template>
    <div class="card  m-1">
        <h5 class="card-header  text-white bg-success ">고객정보
                </h5>
        <form class="card-body" 
            @submit.prevent="fnEmit">
            <div class="input-group">
                <span class="input-group-text col-3 bg-secondary text-white" 
                    id="lbl_name">이름
                </span>
                <input type="text" 
                    class="form-control" 
                    id="inp_name"
                    placeholder="이름" 
                    v-model="customer.name" />
            </div>
            <div class="input-group">
                <span class="input-group-text col-3 bg-secondary text-white" 
                    id="lbl_phone">전화번호
                </span>
                <input type="tel" 
                    class="form-control" 
                    id="inp_phone"
                    placeholder="전화번호" 
                    v-model="customer.phone"  />
            </div>
            <div class="input-group">
                <span class="input-group-text col-3 bg-secondary text-white" 
                    id="lbl_email">이메일
                </span>
                <input type="email" 
                    class="form-control" 
                    id="inp_email"
                    placeholder="이메일"
                    v-model="customer.email"   />
            </div>
            <div class="input-group">
                <span class="input-group-text col-3 bg-secondary text-white" 
                    id="lbl_address">주소
                </span>
                <input type="text" 
                    class="form-control" 
                    id="inp_address"
                    placeholder="주소"
                    v-model="customer.address"  />
            </div>
            <div class="d-flex justify-content-end p-1" >
                <button class="btn btn-success">
                        <!-- @click="fnEmit"> -->                        
                        추가
                </button>
            </div>     
        </form>
    </div>    
</template>

