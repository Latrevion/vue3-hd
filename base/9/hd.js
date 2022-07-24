const app = Vue.createApp({
  data(){
    return {
      name:'顶级-根组件父亲'
    }
  },
  template: '<div>{{name}}<child/></div>'
})

app.component('child',{
  data(){
    return{
      children:'child'
    }
  },
  template: '<div>{{children}}</div>'
})

const vm = app.mount('#app')
// console.log(vm.name)
