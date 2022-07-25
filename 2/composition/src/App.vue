<template>
  <Count :init="3" @change="changeHandle" ref="countComponent" style="color:red">
    <h1>code-uncle</h1>
    <p>like code</p>
  </Count>
  <br>
  <!--  {{changeHandle()}}-->
</template>

<script>
import Count from "./components/Count.vue"
import {ref, onMounted, onBeforeMount, onBeforeUpdate, onUpdated, onUnmounted, onBeforeUnmount, provide} from "vue"

export default {
  components: {
    Count
  },
  //setup是在beforecreate 和created之间运行的。当成created执行就行了。所以它是没有onbeforecreate 和 oncreated
  setup() {
    //ref 相应式数据
    let user = ref("uncle-xiang")

    provide("user", user)
    //传递方法 给子组件修改数据
    provide('updateUser',(newValue)=>{user.value=newValue})

    setTimeout(() => user.value = "sina.con", 1000)


    //获取子组件
    const countComponent = ref()
    onMounted(() => {
      console.log(countComponent.value.num)
    })

    const changeHandle = () => countComponent.value?.num

    return {changeHandle, countComponent}
  }
}
</script>