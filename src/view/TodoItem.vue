<script setup lang="ts">
  // defineProps(['title'])
  // defineProps({
  //   // title: {
  //   //   type: String,
  //   //   required: true
  //   // }
  //   title: String
  // })
  defineProps<{
    title?: string
  }>()
  defineEmits(['remove'])
</script>
<template>
  <li>
    {{ title }}
    <button @click="$emit('remove')">remove</button>
  </li>
</template>
