<script setup>
import Item from '../components/Item.vue'
import useTodo from "../composables/useTodo.js"
import Add from '../components/Add.vue'

const {todos,load} = useTodo()
load()
</script>

<template>
  <div class="todo">
    <Item :todo="todo" class="item" v-for="todo in todos" :key="todo.id"></Item>
  </div>
  <Add></Add>
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
