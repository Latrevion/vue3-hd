<script setup>
import {ref} from "vue"
const todos = ref([])

todos.value =await fetch('http://127.0.0.1:3003/news').then(r=>{
    return r.json()
    // return new Promise(resolve => {
    //   setTimeout(()=>resolve(r.json()),2000)
    // })
})



</script>

<template>
  <div>
    {{ todos }}
  </div>
</template>

<style scoped>
div{
  color: #ffffff;
}
</style>
