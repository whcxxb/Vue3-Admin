<script setup lang="ts">
  import { getAction } from '@/utils/http/api'
  import { useUserStore } from '@/store/user'
  const userStore = useUserStore()
  const getUserInfo = async () => {
    const res: any = await getAction('/userinfo', {
      username: userStore.username
    })
    console.log(res)
  }
  getUserInfo()
</script>
<template>
  <h2>home</h2>
</template>
