//定义成函数，不同组件调用的时候就是唯一的
import useRequest from "../composables/useRequest.js"
import {ref} from "vue"

export default async ()=>{
  const request = useRequest()
  const todos = ref([])
  todos.value =await request.get()
  return {todos}
}