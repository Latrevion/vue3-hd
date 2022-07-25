<template>
  <div>
    <button @click="change">
      {{ hd.name }}
    </button>
  </div>
</template>

<script>
import {ref, reactive} from "vue"

export default {
  setup() {
    //基本数据类型就选ref 然后加上value修改
    //对象数组可以使用reactive或ref，变成响应式数据

    //使用ref让基本类型变成引用类型
    // const hd = ref(9)
    // const hd = ref([])
    // const hd = reactive([])
    const hd = reactive({name: "houdun"})

    // const change=()=>hd.value=100

    //本身有引用特性的，使用reactive 可以省略value
    // const change=()=>hd.push(100)
    const change = () => hd.name = "uncle"
    return {hd, change}
  }
}
</script>

<style scoped>

</style>