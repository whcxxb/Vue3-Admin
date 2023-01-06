<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const goTo = (name: string, id?: string) => {
    if (id) {
      router.push({
        name: name,
        params: { id: id }
      })
    } else {
      router.push({
        name: name
      })
    }
  }
</script>
<template>
  <!-- <el-button @click="goTo('Home')">Home</el-button>
  <el-button @click="goTo('About', '123')">About</el-button> -->
  <router-view />
</template>
<style lang="less">
  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
