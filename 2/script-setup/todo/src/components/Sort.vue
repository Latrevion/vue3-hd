<script setup>
import useTodo from "../composables/useTodo.js"

const {orderBy} = useTodo()
const order = () => {
  orderBy.value = orderBy.value === "asc" ? "desc" : "asc"
}
</script>

<template>
  <div class="sort">
    <button @click="order">
      {{ orderBy === "asc" ? "升序" : "降序" }}
    </button>
  </div>
</template>

<style lang='scss'>
.sort {
  display: flex;

  button {
    margin-left: 10px;
    background: #16a085;
    color: #ffffff;
    border: none;
    padding: 5px 10px;
  }
}
</style>