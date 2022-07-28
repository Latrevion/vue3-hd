<script setup>
import {ref} from "vue"
import Item from '../components/Item.vue'
const todos = ref([])

todos.value =await fetch('http://127.0.0.1:3003/news').then(r=>r.json())



</script>

<template>
  <div>
    <Item :todo="todo" class="item" v-for="todo in todos" :key="todo.id"></Item>
  </div>
</template>

<style lang="scss" scoped>
div{
 display: flex;
  flex-direction: column;
  .item{
    margin-bottom: 10px;
  }
}
</style>
