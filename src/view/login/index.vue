<script setup lang="ts">
  import { ref } from 'vue'
  const login = () => {
    const token = '123456'
    if (userName.value === 'admin' && password.value === '123456') {
      localStorage.setItem('token', token)
      console.log('login success')
    } else {
      console.log('login fail')
    }
  }
  const userName = ref<string>('')
  const password = ref<string>('')
</script>
<template>
  <form @submit="login">
    <div>
      <label for="userName">user</label>
      <input type="text" id="userName" v-model="userName" />
    </div>
    <div>
      <label for="password">password</label>
      <input type="password" id="password" v-model="password" />
    </div>
    <button type="submit">login</button>
  </form>
</template>
