const app = Vue.createApp({
  data(){
    return {
      name:'Luke',
      html:`<div style="color: deepskyblue;">baidu.com</div>`
    }
  },

})

const vm = app.mount('#app')

// console.log(vm.name)
setTimeout(()=>{
  vm.$data.name = 'Latrevion'
},2000)
