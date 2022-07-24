<template>
  <Count :init="3" @change="changeHandle" ref="countComponent" style="color:red">
    <h1>code-uncle</h1>
    <p>like code</p>
  </Count>
  <br>
  {{changeHandle()}}
</template>

<script>
import Count from "./components/Count.vue"
import {ref,onMounted} from "vue"

export default {
  components: {
    Count
  },
  //setup是在beforecreate 和created之间运行的。当成created执行就行了。所以它是没有onbeforecreate 和 oncreated
  setup() {
    //获取子组件
    const countComponent =ref()
    onMounted(()=>{
      console.log(countComponent.value.num)
    })

    const changeHandle =()=>countComponent.value?.num

    return {changeHandle,countComponent}
  }
}
</script>