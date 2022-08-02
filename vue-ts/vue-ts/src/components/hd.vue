<script setup lang="ts">
import useApi from '../../composables/useApi';
const {response} = await useApi(`http://127.0.0.1:3003/posts`)
// import {ref} from 'vue';
//
// const res = await fetch('http://127.0.0.1:3003/posts').then(r => r.json());
// const article = ref<{ title: string }>(res);
//
// const state = ref(false);

// const data = await fetch('http://127.0.0.1:3003/posts/1').then(r =>r.json())
// const post = ref(data)
//
// type user = {age:number,name?:string}
// let f:user|string|boolean= {age:12}
// f = 'bad'
</script>

<template>
  {{ response }}
  <!--  <button @click="state =!state">button</button>-->
  <!--  <div v-if="state">-->
  <!--    {{ article.title}}-->
  <!--  </div>-->
</template>


<style scoped>
</style>
