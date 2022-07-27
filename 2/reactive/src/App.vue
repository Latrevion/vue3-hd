<template>
  <div>
    <button @click="change">
      {{name }}
    </button>
  </div>
</template>

<script>
import {ref, reactive, toRefs} from "vue"
//toRefs批量处理为响应数据
export default {
  setup() {

    const hd = reactive({name: "houdun"})

    const change = () => hd.name = "uncle"
    return {...toRefs(hd), change}
  }
}
</script>

<style scoped>

</style>