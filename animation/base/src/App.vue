<script setup>
import {ref} from "vue"
// import Hd from "./components/Hd.vue"
import Xj from "./components/Xj.vue"
import Trans from "./components/Trans.vue"

const show = ref(true)
</script>

<template>
  <!--  <Hd v-if="show">保存提交</Hd>-->
<!--  <transition name="trans">-->
<!--    <Trans v-if="show">uncle1</Trans>-->
<!--  </transition>-->

  <transition appear
  enter-active-class="animate__animated animate__flip"
  leave-active-class="animate__animated  animate__rotateOut"
  >
    <Xj v-if="show">uncle2</Xj>
  </transition>

  <button @click="show=!show">切换</button>
</template>

<style lang="scss" scoped>
//.trans-enter-from,
//.trans-leave-to {
//  opacity: 0;
//}

.trans-enter-active,
.trans-leave-active
{
  transition: .6s ease;
}

//.xj-enter-from,
//.xj-leave-to {
// transform: rotateX(360deg);
//}

.hd-enter{
  animation: identifier 2s ease ;
}

.hd-leave{
  animation: identifier 2s ease reverse ;
}

@keyframes identifier {
  from{
    transform:scale(0);
  }

  to{
    from{
      transform:scale(1) rotateX(360deg);
    }
  }
}


button {
  display: block;
  margin-top: 10px;
}
</style>
