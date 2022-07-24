import Todo from './components/todo.js'
import db from './data/db.js'

const app = Vue.createApp({
  components: {Todo},
  data(){
    return {
      db
      // title:'Looking'
    }
  }
})

app.mount('#app')

export default app