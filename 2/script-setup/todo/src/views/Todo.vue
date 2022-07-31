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
<!--    组件封装好后 不需要关心组件的实现 只需要设置传递几个参数 tag="ul" duration="10" delay="5"-->
    <AnimateList tag="ul" duration="1" delay=".5">
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
