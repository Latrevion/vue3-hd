<template>
  <button @click="sub">-</button>
  <!--  vue已经处理过数据，不需要用num.value-->
  {{ num }}
  <button @click="add">+</button>
</template>

<script>
//引入ref
import {ref, watch, watchEffect} from "vue"

export default {
  props: {
    init: {type: Number, default: 3}
  },
  emits:['change'],
  setup(props,context) {
    const {emit,expose} =context
    //使得数据响应式
    let num = ref(props.init)
    let add = () => {
      num.value++
      emit('change')
    }
    let sub = () => {
      num.value--
      emit('change')
    }
    // watch(num, (newValue)=>{
    //   if(newValue<0)num.value =0
    // })
    const stop = watchEffect(() => {
      if (num.value < 0) num.value = 0
      emit('change')
    })
    //只暴露num，其他不要暴露
    expose({num})
    //让watchEffect失效
    // stop()
    return {num, add, sub}
  },
}
</script>

