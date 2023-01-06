<script setup lang="ts">
  import HelloChild from './HelloChild.vue'
  // defineProps<{
  //   title?: string
  // }>()
  // defineProps(['modelValue'])
  const props = defineProps({
    modelValue: String,
    modelModifiers: Object
  })
  // const props = defineProps<{
  //   modelValue: string
  //   modelModifiers: {
  //     capitalize: boolean
  //   }
  // }>()
  const emit = defineEmits(['update:modelValue'])
  // const inputChange = (event: Event) => {
  //   const value = (event.target as HTMLInputElement).value
  //   emit('update:modelValue', value)
  // }
  const inputChange = (e: Event) => {
    let value = (e.target as HTMLInputElement).value
    if (props.modelModifiers && props.modelModifiers.capitalize) {
      value = value.charAt(0).toUpperCase() + value.slice(1)
    }
    emit('update:modelValue', value)
  }
  console.log(props.modelModifiers) // { capitalize: true }
</script>
<template>
  <HelloChild />
  <!-- <p :class="$attrs.class">ppp</p>
  <span>spanspan</span> -->
  <input type="text" :value="modelValue" @input="inputChange" />
</template>
<style lang="less" scoped>
  .active {
    color: hotpink;
  }
</style>
