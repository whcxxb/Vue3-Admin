<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const goTo = (name: string, id?: string) => {
    router.push({
      name: name,
      params: { id: id }
    })
  }
</script>
<template>
  <button @click="goTo('Home')">home</button>
  <button @click="goTo('About', '123')">about</button>
  <router-view />
</template>
<style lang="less" scoped></style>
