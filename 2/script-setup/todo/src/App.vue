<script setup>
import Todo from "./views/Todo.vue"
</script>
<template>
  <!--  当异步完成的时候，才会渲染-->
  <suspense>
    <template #default>
      <div>
        <Todo></Todo>
      </div>
    </template>
    <template #fallback>loading...</template>
  </suspense>
</template>

<style scoped>
*{
  color: #ffffff;
}
</style>
