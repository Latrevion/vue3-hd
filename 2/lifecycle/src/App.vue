<template>
  <div ref="el">
    uncle
  </div>
  <button @click="show=!show">button</button>
  <Child v-if="show" ref="child"></Child>
<!--  页面使用了data里面的数据，才能触发更新-->
<!--  {{hd}}-->
</template>

<script>
import Child from "./components/Child.vue"
export default {
  components:{Child},
  data() {
    return {
      hd: 'houdun-uncle',
      show:true
    }
  },
  beforeCreate() {
    console.log('父组件-beforecreate-'+this.hd)
    console.log(this.$refs.el)
  },
  created() {
    console.log('父组件-beforecreate-'+this.hd)
    //创建的时候，还没挂载，不能操作模板的数据
    // console.log(this.$refs.el)
    // setTimeout(()=>{
    //   this.hd = '护盾'
    // },1000)
  },
  beforeMount() {
    console.log('父组件-beforeMount-'+this.hd)
    // console.log(this.$refs.el)
  },
  mounted() {
    //只有挂载之后，才能操作dom。 只有子组件挂载后，才到父组件挂载。
    console.log('父组件-mounted-'+this.hd)
    // console.log(this.$refs.el)
  },
  beforeUpdate() {
    console.log(this.$refs.child)
    console.log('父组件-beforeUpdate-'+this.hd)
  },
  updated() {
    //场景：当用户与客服沟通时候，更新数据，不停的下拉对话框
    console.log(this.$refs.child)
    console.log('父组件-updated-'+this.hd)
  }
}
</script>

<style scoped>

</style>