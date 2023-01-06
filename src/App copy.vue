<template>
  <!-- <h2>{{ title }}</h2> -->
  <h2>{{ myText }}</h2>
  <!-- <Hello v-model:title="title" /> <br /> -->
  <hello v-model.capitalize="myText" /> <br />
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
  <slots-demo>
    <!-- 具名插槽 -->
    <template #title>This is title</template>
    <template #btn="btnProps">Click me !{{ btnProps.msg }}</template>

    <!-- 作用域插槽 -->
    <template #default="slotProps">
      {{ slotProps.msg }}
      {{ slotProps.count }}
    </template>
  </slots-demo>
</template>
<script setup lang="ts">
  import SlotsDemo from '@/view/SlotsDemo.vue'
  import TodoItem from '@/view/TodoItem.vue'
  import hello from '@/view/hello.vue'
  import { ref, reactive, watch, provide } from 'vue'
  const myText = ref('text22')
  const title = ref('hello')
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

  provide('msg', title)
</script>
<style lang="less" scoped>
  .content {
    padding: 20px;
    .active {
      color: hotpink;
    }
  }
</style>
