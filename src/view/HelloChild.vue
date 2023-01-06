<template>
  <h2>this is helloChild</h2>
  <h2>{{ msg }}</h2>
</template>

<script setup lang="ts">
  import { inject } from 'vue'
  const msg = inject('msg')
</script>

<style scoped></style>
