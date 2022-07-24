const app = Vue.createApp({
  data() {
    return {
      name: "Luke",
      event: "mouseenter",
      num: 1,
      error: ""
    }
  },
  watch:{
    num(newValue,oldValue){
      return this.error = newValue ===0?'0':newValue ===10?'不能大于10':""
    }
  },
  methods: {
    add() {
      if (this.num < 10) {
        this.num++
      }
    },
    del() {
      if (this.num > 0) {
        this.num--
      }}
    }
  })

const vm = app.mount("#app")
