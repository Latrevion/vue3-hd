<template>
  <Button :content="btnContent"  type="success" class="hd" id="xj" @click="handle"/>
<!--  <hr>-->
<!--  <button @click="btnContent='luke'">父组件</button>-->
<!--  {{btnContent}}-->
<!--  <div>-->
<!--    <Button :content="btnContent" hd-tip="@" type="success" style="margin-right: 10px"/>-->
<!--    <Button content="删除" type="danger" style="margin-right: 10px"/>-->
<!--    <Button content="反馈" type="info" style="margin-right: 10px"/>-->
<!--    <Button content="编辑" type="disabled" style="margin-right: 10px"/>-->
<!--    <br>-->
<!--    <Button v-bind="{content:'保存',type:'success',style:'margin-top:20px'}"/>-->
<!--  </div>-->
</template>

<script>
import Button from "./components/Button.vue"
export default {
components:{Button},
  data() {
    return {
      // btnContent: '保存提交'
      btnContent: '反馈'
    }
  },
  methods:{
  handle(){
    alert('你好')
    console.log(1)
  }
  }

}
</script>

<style scoped>

</style>