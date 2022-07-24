<template>
  <div>
    <input type="text" :value="content" @input="change">
    {{ content }}
  </div>
</template>

<script>
export default {
  props: ["modelValue"],
  //下面可以省略
  emits:['update:modelValue'],
  //不要修改props的值
  data(){
    return{
      content:this.modelValue
    }
  },
  methods:{
    change(event){
        this.content= event.target.value
        this.$emit('update:modelValue',this.content)
    }
  }
}
</script>

<style scoped lang='scss'>

</style>