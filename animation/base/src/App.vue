<script setup>
import {ref} from "vue"
import Hd from './components/Hd.vue'
const show = ref(false)
</script>

<template>
  <Hd v-if="show"></Hd>
  <button @click="show=!show">切换</button>
</template>

<style lang="scss" scoped>
button {
  margin-top: 60px;
}
</style>
