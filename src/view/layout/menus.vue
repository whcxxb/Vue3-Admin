<template>
  <el-menu @select="select">
    <el-menu-item index="1">用户管理</el-menu-item>
    <el-menu-item index="2">文章管理</el-menu-item>
    <el-menu-item index="3">评论管理</el-menu-item>
    <el-menu-item index="4">分类管理</el-menu-item>
    <el-menu-item index="5">标签管理</el-menu-item>
    <el-menu-item index="6">友链管理</el-menu-item>
    <el-menu-item index="7">系统设置</el-menu-item>
  </el-menu>
</template>
<script setup lang="ts">
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const select = (index: string) => {
    console.log(index)

    switch (index) {
      case '1':
        router.push('/user')
        break
      case '2':
        router.push('/article')
        break
      case '3':
        router.push('/comment')
        break
      case '4':
        router.push('/category')
        break
      case '5':
        router.push('/tag')
        break
      case '6':
        router.push('/link')
        break
      case '7':
        router.push('/setting')
        break
    }
  }
</script>
