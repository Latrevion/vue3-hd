<script setup>
import {ref} from "vue"
// import Hd from "./components/Hd.vue"
import Trans from "./components/Trans.vue"

const show = ref(false)
</script>

<template>
  <!--  <Hd v-if="show">保存提交</Hd>-->
  <transition>
    <Trans v-if="show">uncle</Trans>
  </transition>
  <button @click="show=!show">切换</button>

</template>

<style lang="scss" scoped>
.v-enter-from,.v-leave-to{
  opacity: 0;

}
.v-enter-active,.v-leave-active{
  transition:2s ease;
}

button {
  display: block;
  margin-top: 10px;
}
</style>
