const app = Vue.createApp({
  data() {
    return {
      name: "Luke",
      event: "mouseenter",
      num: 1,
      tip:''
    }
  },
  computed: {
    // error() {
    //     return this.num === 0 ? '不能少于0' : this.num === 10 ? '不能超过10' :''
    // }

    error:{
      get(){
        const  message =  this.num === 0 ? '不能少于0' : this.num === 10 ? '不能超过10' :''
        if (message) return this.tip+message
      },
      set(tip){
        this.tip =tip
      }
    }
  }
  ,
  methods: {
    // error() {
    //   return this.num === 0 ? '不能少于0' : this.num === 10 ? '不能超过10' :''
    // },
    add() {
      this.error = '提示'
      if (this.num < 10) this.num++
    },
    del() {
      this.error = '警告'
      if (this.num > 0) this.num--
    }
  }
})

const vm = app.mount("#app")
