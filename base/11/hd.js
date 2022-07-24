const app = Vue.createApp({
  // data(){
  //   return {
  //     name:'Luke',
  //     id:'yahoo',
  //     a:'href',
  //     link:'https://baidu.com',
  //     n:2,
  //     value:true
  //   }
  // },
  
})

const vm = app.mount('#app')

setTimeout(()=>{
  vm.value =false
  vm.name ='looking'
},3000)