<script setup>
import {ref} from "vue"

const action = ref("on")
</script>

<template>
  <button v-if="action==='on'" @click="action='off'" class="on">开启</button>
  <button v-else @click="action='on'" class="off">关闭</button>
</template>

<style lang="scss"  scoped>
button{
  border: none;
  padding: 5px 10px ;
  color: #ffffff;
  cursor: pointer;
  &.on{
    background: #16a085;
  }
  &.off{
    background: #d35400;
  }
}
</style>
