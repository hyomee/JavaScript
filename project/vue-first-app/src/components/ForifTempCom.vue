<script>
    export default {
        data() {
            return {
                users: [
                { name: '홍일이', age: 33 },
                { name: '홍이이', age: 33 },
                { name: '홍삼이', age: 17 },
                { name: '홍사이', age: 16 }
                ]
            }
        }
    }
</script>

<template>
    <template v-for="user in users" :key="user.name">
      <p v-if="user.age >= 18">{{ user.name }}</p>
    </template>
</template>
  
