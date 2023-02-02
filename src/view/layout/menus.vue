<template>
  <el-menu @select="select" :default-active="path">
    <el-menu-item index="/dashboard">仪表盘</el-menu-item>
    <el-menu-item index="/user">用户管理</el-menu-item>
    <el-menu-item index="/article">文章管理</el-menu-item>
    <el-menu-item index="4">评论管理</el-menu-item>
    <el-menu-item index="5">分类管理</el-menu-item>
    <el-menu-item index="6">标签管理</el-menu-item>
    <el-menu-item index="7">友链管理</el-menu-item>
    <el-menu-item index="8">系统设置</el-menu-item>
  </el-menu>
</template>
<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'
  import { ref, watchEffect } from 'vue'
  const route = useRoute()
  const router = useRouter()
  const path = ref<string>('')
  watchEffect(() => {
    path.value = route.path
  })
  const select = (index: string) => {
    router.push(index)
  }
  // const select = (index: string) => {
  //   switch (index) {
  //     case '1':
  //       router.push('/dashboard')
  //       break
  //     case '2':
  //       router.push('/user')
  //       break
  //     case '3':
  //       router.push('/article')
  //       break
  //     case '4':
  //       router.push('/comment')
  //       break
  //     case '5':
  //       router.push('/category')
  //       break
  //     case '6':
  //       router.push('/tag')
  //       break
  //     case '7':
  //       router.push('/link')
  //       break
  //     case '8':
  //       router.push('/setting')
  //       break
  //   }
  // }
</script>
