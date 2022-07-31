<script setup>
import gsap from "gsap"

const beforeEnter = (el) => {
  gsap.set(el, {
    opacity: 0
  })
}

const enter = (el, done) => {
  gsap.to(el, {
    opacity: 1,
    duration: .6,
    //陆续加载
    delay: el.dataset.index * 0.3
  })
}
</script>

<template>
  <transition-group appear name="todo" @before-enter="beforeEnter" @enter="enter">
    <slot></slot>
  </transition-group>
</template>

<style lang="scss">
.todo-leave-to {
  opacity: 0;
  transform: scale(0);
}

//控制消失元素的动画效果
.todo-leave-active {
  transition: 1s ease;
  //脱离文档流
  position: absolute;
}

//控制后面元素的动画效果
.todo-move {
  transition: all 1s ease;
}


</style>
