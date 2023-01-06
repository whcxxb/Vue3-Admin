<script setup lang="ts">
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter()
  const route = useRoute()
  console.log(route.name)
</script>
<template>
  <h2>home</h2>
</template>
