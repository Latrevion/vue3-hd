<script setup>
defineProps({
  todo:{type:Object,required:true}
})

</script>

<template>
  <input type="text" :value="todo.title">
</template>


<style scoped>
input{
  padding: 10px;
}
</style>