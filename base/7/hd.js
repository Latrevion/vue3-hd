Vue.createApp({
  data(){
    return{
      title:'vue'
    }
  },
 template:`<div>baidu.com-{{title}}</div>`
}).mount('#app')