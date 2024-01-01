<script setup>
    const users = [
        { name: '홍일이', age: 33 },
        { name: '홍두이', age: 33 },
        { name: '홍삼이', age: 17 },
        { name: '홍네이', age: 16 }
      ]
</script>


<!-- <script>
export default {
  data() {
    return {
      users: [
        { name: 'John', age: 33 },
        { name: 'Jane', age: 33 },
        { name: 'Jack', age: 17 },
        { name: 'Jill', age: 16 }
      ]
    }
  }
} -->

<template>
    <template v-for="user in users" :key="user.name">
        <p v-if="user.age >= 18">{{ user.name }}</p>
    </template>
</template>