<template>
<!--  <Count :init="3" @change="changeHandle" ref="countComponent"></Count>-->
  <Count :init="3" @change="changeHandle" ref="countComponent"></Count>
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
  setup() {
    // let count = ref(0)
    //获取子组件
    // const countComponent = ref()
    const countComponent =ref()
    onMounted(()=>{
      console.log(countComponent.value.num)
    })


    // const changeHandle = ()=>countComponent.value?.num
    const changeHandle =()=>countComponent.value?.num
    // return {changeHandle,countComponent}
    return {changeHandle,countComponent}
    // return {changeHandle}

  }
}
</script>

