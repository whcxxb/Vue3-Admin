<template>
  <h2>about</h2>
  <h2>{{ id }}</h2>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  const props = defineProps<{
    id: string
  }>()
  const route = useRoute()
  console.log(route.params)
  console.log(props.id)
</script>
