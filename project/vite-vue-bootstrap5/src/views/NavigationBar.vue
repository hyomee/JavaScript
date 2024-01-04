<script setup>
    import { ref } from 'vue'

    const menu = ref("")
    const menus = [
        { key: 'Home', value: '홈',  URL:'#'},
        { key: 'Component_01', value: '컴포넌트_01',  URL:'#'},
        { key: 'Component_02', value: '컴포넌트_02',  URL:'#'},
        { key: 'Option', value: '옴션',  URL:'#'},
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
            <a class="navbar-brand" href="#">ABACUS</a>
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
a:active {
  color: green; 
}
</style>