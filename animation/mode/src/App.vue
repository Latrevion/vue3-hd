<script setup>
import "animate.css"
import {ref} from "vue"

const action = ref("on")

</script>

<template>
  <section>
    <transition
        enter-active-class="animate__animated animate__zoomIn"
        leave-active-class="animate__animated animate__zoomOut"
        mode="out-in"
    >
      <button v-if="action==='on'" @click="action='off'" class="on">开启</button>
      <button v-else @click="action='on'" class="off">关闭</button>
    </transition>
  </section>
</template>

<style lang="scss">
//section{
//  position: relative;
//  button{
//    position: absolute;
//  }
//}
.animate__animated{
  animation-duration: 10s;
}


button {
  border: none;
  padding: 5px 10px;
  color: #ffffff;
  cursor: pointer;

  &.on {
    background: #16a085;
  }

  &.off {
    background: #d35400;
  }
}
</style>
