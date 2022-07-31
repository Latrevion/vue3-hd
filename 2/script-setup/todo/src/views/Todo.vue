<script setup>
import Item from "../components/Item.vue"
import useTodo from "../composables/useTodo.js"
import Add from "../components/Add.vue"
import Sort from "../components/Sort.vue"

const {todos, load} = useTodo()
load()
</script>

<template>
  <div class="form">
    <Add class="add"></Add>
    <Sort></Sort>
  </div>
  <div class="todo">
    <transition-group name="todo">
      <Item :todo="todo" class="item" v-for="todo in todos" :key="todo.id"></Item>
    </transition-group>
  </div>
</template>

<style lang="scss">
.todo-leave-to{
  opacity: 0;
  transform: scale(0);
}
//控制消失元素的动画效果
.todo-leave-active{
  transition:1s ease;
  //脱离文档流
  position: absolute;
}
//控制后面元素的动画效果
.todo-move{
  transition:all 1s ease;
}

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
