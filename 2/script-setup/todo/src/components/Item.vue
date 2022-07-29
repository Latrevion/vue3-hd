<script setup>
import useRequest from "../composables/useRequest.js"
const request = useRequest();

const {todo}= defineProps({
  todo: {type: Object, required: true}
})

const emit=defineEmits(['del'])

const del = async ()=>{
  await request.delete(todo.id)
  emit('del')
}

</script>

<template>
    <div class="item">
      <input type="text" :value="todo.title">
      <button @click="del">删除</button>
    </div>
</template>


<style  lang="scss">
div.item {
  display: flex;

  input {
    padding: 10px;
    flex: 1;
  }
}
</style>