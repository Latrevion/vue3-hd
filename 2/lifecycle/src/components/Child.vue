<template>
  <div ref="el">
    child
  </div>
</template>

<script>
export default {
  data() {
    return {
      hd: '子组件',
      timeId:null
    }
  },
  beforeCreate() {
    console.log('子组件-beforecreate-'+this.hd)
    console.log(this.$refs.el)
  },
  created() {
    console.log('子组件-beforecreate-'+this.hd)
    //创建的时候，还没挂载，不能操作模板的数据
    console.log(this.$refs.el)
    this.timeId = setInterval(()=>{
      console.log("houdun")
    },500)
  },
  beforeMount() {
    console.log('子组件-beforeMount-'+this.hd)
    // console.log(this.$refs.el)
  },
  mounted() {
    console.log('子组件-mounted-'+this.hd)
    // console.log(this.$refs.el)
  },
  beforeUnmount() {
    console.log('子组件-beforeUnmount-'+this.hd)
  },
  unmounted() {
    console.log('子组件-unmounted-'+this.hd)
    //卸载组件的时候，清除定时器
    clearInterval(this.timeId)
  }

}
</script>

<style scoped>

</style>