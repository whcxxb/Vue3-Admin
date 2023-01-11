<script setup lang="ts">
  import { useRouter, useRoute } from 'vue-router'
  import { useUserStore } from '@/store/user'
  import axios from '@/utils/request'
  import { ElMessage } from 'element-plus'
  const router = useRouter()
  const route = useRoute()
  console.log(route.name)
  // const getUser = async () => {
  //   const res = await axios.get('/users')
  //   console.log(res)
  // }
  // getUser()
  const showMsg = () => {
    ElMessage('ccc')
  }
  const userStore = useUserStore()
</script>
<template>
  <h2>home</h2>
  <el-button @click="showMsg">msg</el-button>
</template>
