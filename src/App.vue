<template>
  <button @click="onClick">test</button>
  <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">Add a todo</label>
    <input type="text" id="new-todo" v-model="newTodoText" placeholder="E.g. Feed the cat" />
    <button>Add</button>
  </form>
  <ul>
    <todo-item
      v-for="(item, index) in todos"
      :key="item.id"
      :title="item.title"
      @remove="todos.splice(index, 1)"
    />
  </ul>
</template>
<script setup lang="ts">
  import TodoItem from '@/view/TodoItem.vue'
  import { ref, reactive, watch } from 'vue'
  const onClick = (event: Event) => {
    x.value = 30
    console.log((event.target as HTMLButtonElement).tagName)
  }
  const todos = reactive([
    {
      id: 1,
      title: 'Do the dishes'
    },
    {
      id: 2,
      title: 'Take out the trash'
    },
    {
      id: 3,
      title: 'Mow the lawn'
    }
  ])
  let todoId = 4
  const newTodoText = ref('')
  const addNewTodo = () => {
    todos.push({
      id: todoId++,
      title: newTodoText.value
    })
    newTodoText.value = ''
  }
  const x = ref(1)
  const y = ref(2)
  // watch(
  //   () => x.value + y.value,
  //   (sum) => {
  //     console.log(sum)
  //   }
  // )
  watch([x, () => y.value], ([newX, newY]) => {
    console.log(`x is ${newX} and y is ${newY}`)
  })
</script>
<style lang="less" scoped>
  .content {
    padding: 20px;
    .active {
      color: hotpink;
    }
  }
</style>
