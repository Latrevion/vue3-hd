//定义成函数，不同组件调用的时候就是唯一的
import useRequest from "../composables/useRequest.js"
import {ref, watch} from "vue"
const todos = ref([])
const orderBy = ref("desc")

export default () => {
  const request = useRequest()
  const load = async () => {
    todos.value = await request.get()
    sort()
  }

  const del = async id => {
    await request.delete(id)
    load()
  }

  const add = async todo => {
    //数据校验 不能为空
    if (todo.title.trim()=='')return  alert('内容不能为空')
    await request.post(todo)
    load()
  }

  const sort = ()=>{
    todos.value = Array.prototype.sort.call(todos.value,(a,b) => {
      return orderBy.value === "asc" ? a.id - b.id : b.id - a.id
    })
  }

  watch(orderBy, () => sort())

  return {todos, del, load, add, orderBy}
}