<template>
  <component :is="defaults[0]"></component>
  <button @click="sub">-</button>
  <span :style="$attrs.style">
  {{ num }}
  </span>
  <button @click="add">+</button>
  <component :is="defaults[1]"></component>
  {{ sum }}
  <hr>
  <button @click="updateUser('teacher')">
    {{ user }}
  </button>
</template>

<script>
//引入ref
import {ref, watch, watchEffect, computed, inject} from "vue"

export default {
  props: {
    init: {type: Number, default: 3}
  },
  emits: ["change"],
  inheritAttrs: false,
  setup(props, context) {
    //用inject接受数据，后面是默认值
    const user = inject("user", "Hou-dun")
    const updateUser = inject("updateUser")


    const {emit, expose, attrs, slots} = context
    const defaults = slots.default()
    //使得数据响应式
    let num = ref(props.init)

    let sum = computed(() => num.value + 100)

    let add = () => {
      num.value++
      emit("change")
    }
    let sub = () => {
      num.value--
      emit("change")
    }
    const stop = watchEffect(() => {
      if (num.value < 0) num.value = 0
      emit("change")
    })
    //只暴露num，其他不要暴露
    expose({num})
    //让watchEffect失效
    // stop()
    return {num, add, sub, attrs, defaults, sum, user, updateUser}
  },
}
</script>

