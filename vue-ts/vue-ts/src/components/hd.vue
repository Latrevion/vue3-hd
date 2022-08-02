<script setup lang="ts">
import {all, find} from '../apis/article';

const {response: articles} = await all();

const {response: article} = await find(1);

</script>

<template>
  <div v-for="article of articles" :key="article.id">{{ article.title }}</div>
</template>

<style scoped>
</style>
