//定义成函数，不同组件调用的时候就是唯一的
import useRequest from "../composables/useRequest.js"
import {ref} from "vue"
const todos = ref([])

export default () => {
  const request = useRequest()
  const load = async ()=>{
    todos.value = await request.get()
  }

  const del = async (id) => {
    await request.delete(id)
    load()
  }
  const add = async todo =>{
    await request.post(todo)
    load()
  }

  return {todos, del,load,add}
}