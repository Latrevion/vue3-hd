<script setup>
import {ref} from "vue"
// import Hd from "./components/Hd.vue"
import Xj from "./components/Xj.vue"
import Trans from "./components/Trans.vue"

const show = ref(false)
</script>

<template>
  <!--  <Hd v-if="show">保存提交</Hd>-->
  <transition name="trans">
    <Trans v-if="show">uncle1</Trans>
  </transition>

  <transition name="xj">
    <Xj v-if="show">uncle2</Xj>
  </transition>

  <button @click="show=!show">切换</button>
</template>

<style lang="scss" scoped>
.trans-enter-from,
.trans-leave-to {
  opacity: 0;
}

.trans-enter-active,
.trans-leave-active {
  transition: 2s ease;
}

.xj-enter-from,
.xj-leave-to {
 transform: rotateX(360deg);
}

.xj-enter-active,
.xj-leave-active {
  transition: 2s ease;
}

button {
  display: block;
  margin-top: 10px;
}
</style>
