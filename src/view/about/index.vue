<template>
  <h2>about</h2>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  const route = useRoute()
  console.log(route.params)
</script>
