const app = Vue.createApp({
  data() {
    return {
      name: "Luke",
      event: "mouseenter",
      num: 1,
      error: ""
    }
  },
  methods: {
    add() {
      // alert(1)
      this.error = ''

      if (this.num < 10) {
        this.num++}
      else {
        this.error = '不能超過10'
      }},
      del (){
      this.error = ''
        if (this.num>0){
          this.num--
        }else{
         this.error = '不能小于0'
        }
    },
    go(envet, title) {
      // envet.preventDefault()
      alert(title)
    }
  }
})

const vm = app.mount("#app")
