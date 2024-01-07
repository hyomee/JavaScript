<script setup>
    import { ref } from 'vue'

    const menu = ref("")
    const menus = [
        { key: 'Home', value: '홈',  URL:'#'},
        { key: 'Component_01', value: 'Vue',  URL:'#'},
        { key: 'Component_02', value: 'Vue 라이브러리',  URL:'#'}
    ]

    function fnMenuClick (evt, menuItem) {
        if (evt) {
            evt.preventDefault();            
        }
           menu.value = menuItem;
        
    }
</script>
<template>
    <nav class="navbar navbar-expand-lg nav-underline navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img alt="ABACUS logo" 
                     class="logo" 
                     src="../../assets/img/ABACUS_CI_1.png" 
                     width="125" 
                     height="20"/>
            </a>
            <button class="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navigationBar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navigationBar">
                <ul class="navbar-nav nav-link active me-auto mb-2 mb-lg-0">
                    <li class="nav-item"
                        v-for="menuItem in menus" :key="menuItem.key">                
                        <a :class="{ 'nav-link': true,  
                                     'active': menu == menuItem.key }" 
                           @click="fnMenuClick(event, menuItem.key)"
                           href="#">
                            {{ menuItem.value }}
                        </a>
                    </li> 
                </ul> 
            </div>
        </div>
    </nav>
</template>

<style lang="scss"> 
</style>