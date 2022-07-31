<script setup>
import Item from "../components/Item.vue"
import useTodo from "../composables/useTodo.js"
import Add from "../components/Add.vue"
import Sort from "../components/Sort.vue"
import AnimateList from "../components/AnimateList.vue"

const {todos, load} = useTodo()
load()

</script>

<template>
  <div class="form">
    <Add class="add"></Add>
    <Sort></Sort>
  </div>
  <div class="todo">
    <AnimateList>
      <Item :todo="todo" class="item" v-for="(todo,index) in todos" :data-index="index" :key="todo.id"></Item>
    </AnimateList>
  </div>
</template>

<style lang="scss">
.form {
  display: flex;
  margin-bottom: 20px;

  .add {
    flex: 1;
  }
}

div.todo {
  display: flex;
  flex-direction: column;
  position: relative;

  .item {
    margin-bottom: 10px;
    //position: absolute;
    width: 100%;
  }
}
</style>
