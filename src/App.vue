<template>
  <div class="content">
    <h2>{{ count }}</h2>
    <button @click="increment">+</button>
    <h2>{{ obj }}</h2>
    <h2>{{ isBookMessage }}</h2>
    <button @click="delbook">delbook</button>
    <button @click="changeObj">change</button>
    <Hello />
  </div>
</template>
<script setup lang="ts">
  import Hello from '@/components/HelloVue.vue'
  import { nextTick, ref, reactive, computed } from 'vue'
  const count = ref(0)
  // nextTick(() => {
  //   console.log(count) // 1);
  // })
  // count++
  const obj = reactive({
    a: { name: 'li' },
    b: ['1']
  })
  const increment = () => {
    count.value++
  }
  const changeObj = () => {
    obj.a.name = 'li2'
    obj.b.push('2')
  }
  const author = reactive({
    name: 'John Doe',
    books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery']
  })
  const isBookMessage = computed(() => {
    return author.books.length > 1 ? 'has books' : 'has no books'
  })
  const delbook = () => {
    author.books.pop()
  }
</script>
<style lang="less" scoped>
  .content {
    padding: 20px;
  }
</style>
