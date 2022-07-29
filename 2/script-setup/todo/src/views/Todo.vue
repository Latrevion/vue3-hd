<script setup>
import Item from '../components/Item.vue'
import useTodo from "../composables/useTodo.js"
const {todos,load} = useTodo()
load()
</script>

<template>
  <div class="todo">
    <Item :todo="todo" class="item" v-for="todo in todos" :key="todo.id"></Item>
  </div>
</template>

<style lang="scss">
div.todo{
 display: flex;
  flex-direction: column;
  .item{
    margin-bottom: 10px;
  }
}
</style>
