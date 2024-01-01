<script setup>
    import {computed, reactive, ref } from 'vue';
    import { sortBy  } from 'lodash';

    const users = [
                { name: '하나', age: 33 },
                { name: '둘', age: 33 },
                { name: '셋', age: 17 },
                { name: '넷', age: 16 }
                ] ;

    const fnLegalUsersComputed= computed(() => { 
        return users.filter(user => user.age >= 18)
    }); 

    const fnLegalUsers = () => { 
        console.log(users);
        return users.filter(user => user.age >= 18)
    }; 

    const fnSortUsers = () => { 
        console.log(users);
        return sortBy(users, ['age'])
    };
 
</script>
<!-- 
<script>
    import {computed, reactive, ref } from 'vue';

    const users = [
                    { name: '하나', age: 33 },
                    { name: '둘', age: 33 },
                    { name: '셋', age: 17 },
                    { name: '넷', age: 16 }
                ];

    const fnUsers = () => {
        const fnLegalUsersCompted = computed(() => { 
                console.log("setup() : fnLegalUsersCompted",  users);
                return  users.filter(user => user.age >= 18)
            }); 

        const fnLegalUsers = () => { 
            console.log("setup() : fnLegalUsers",  users);
            return users.filter(user => user.age >= 18)
        }; 

        return {
            fnLegalUsersCompted, 
            fnLegalUsers
        }
    }

    export default {
        data() {
            return {
                users
            }
        },  
        setup() { 
            const {fnLegalUsersCompted, fnLegalUsers } = fnUsers();
            return {
                fnLegalUsersCompted,
                fnLegalUsers,
            }
        }
         
    }
</script>  -->

 
<template>
    <template v-for="user in fnSortUsers()" :key="user.name"> 
        {{ user.name }} {{ user.age }}  <br/>
    </template>
</template>
  
