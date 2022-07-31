<script setup>
import {ref} from "vue"
// import Hd from "./components/Hd.vue"
import Xj from "./components/Xj.vue"
import Trans from "./components/Trans.vue"
const show = ref(true)

const beforeEnter = (el)=>{
  gsap.set(el, {
    opacity:0
  })
}

const enter =(el,done)=>{
  gsap.to(el, {
    opacity:1,
    duration:2,
    onComplete:done
  })
}

const leave=(el,done)=>{
  gsap.to(el, {
    opacity:0,
    duration:2,
    onComplete:done
  })
}
</script>

<template>
  <!--  <Hd v-if="show">保存提交</Hd>-->
<!--  <transition name="trans">-->
<!--    <Trans v-if="show">uncle1</Trans>-->
<!--  </transition>-->

<!--  beforeEnter enter afterEnter beforeLeave leave afterLeave-->
  <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
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
