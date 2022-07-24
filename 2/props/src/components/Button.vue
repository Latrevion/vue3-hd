<template>
  <section>
<!--    <div v-bind="$attrs" :id="$attrs.id" :class="[type,disabled]" :style="$attrs.style" @click="change">-->
    <div :id="$attrs.id" :class="[type,disabled]" :style="$attrs.style" >
<!--     <span v-if="hdTip">{{hdTip}}</span>-->
    {{ text }}
  </div>
    <h2 v-bind="$attrs">houdun</h2>
  </section>

  <!--    <span></span>-->
  <!--  {{arr}}-->
</template>

<script>
export default {
  inheritAttrs:false,
  data() {
    return {
      text: this.content
    }
  },
  watch:{
    content(newvalue){
      this.text= newvalue
    }
  },
// props:['content']
  props: {
    click:{
      type:Function
    },
    content: {
      type: String,
      default: "ok",
      required:true
    },
    // arr:{
    //   type:Number,
    //   default(){
    //     return [1,22,3]
    //   }
    // },
    type: {
      type: String,
      default: "info",
      validator(v) {
        return ["success", "info", "danger", "disabled"].includes(v)
      }
    },
    hdTip: String,
    disabled: {
      type: Boolean,
      default: false
    }
  }
  ,
  methods:{
    change(){
      this.text = 'loading......'
      setTimeout(()=>{
        this.text = this.content
      },3000)
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  background: #27ae60;
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 10px;
  opacity: .6;
  transition: 1s;
  display: inline-block;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &.info {
    background: #ddd;
  }

  &.success {
    background: #27ae60;
  }

  &.danger {
    background: indianred;
  }

  &.disabled {
    opacity: 1;
    color: #666;
    background-color: #aaa !important;
    cursor: default;
  }
}
</style>