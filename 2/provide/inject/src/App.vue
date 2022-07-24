<template>
  <main>
    <div v-for="(component,index) in components" :key="index" @click="currentComponent=component.name"
         :class="{active:component.name===currentComponent}">
      {{ component.title }}
    </div>
  </main>
  <button @click="callComponent">调用组件</button>
  <input type="text" ref="input">
  <!-- 保持缓存-->
  <keep-alive>
    <component :is="currentComponent" ref="component"></component>
  </keep-alive>
</template>

<script>
import Weixin from "./components/Weixin.vue"
import Site from "./components/Site.vue"
import config from "./config.js"

export default {
  methods:{
    callComponent(){
     this.$refs.input.value = 'uncle'
     //  this.$refs.component.show()
    }
  },
  components: {Weixin, Site},
  provide() {
    return {
      webname: this.teacher,
      config: this.config
    }
  },
  data() {
    return {
      config,
      teacher: {name: "teacher"},
      currentComponent: "weixin",
      components: [
        {title: "微信管理", name: "Weixin"},
        {title: "网站信息", name: "site"}
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
main {
  display: flex;

  div {
    border: 1px solid #dddddd;
    padding: 10px;
    margin-right: 20px;
    cursor: pointer;
    transition: .5s;

    &.active {
      background: #16a085;
      color: #ffffff;
    }
  }
}

</style>