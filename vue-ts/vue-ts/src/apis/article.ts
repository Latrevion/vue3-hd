import useApi from '../../composables/useApi';
export type  Article = {
  id:number
  title:string
  author:string
}
const host = `http://127.0.0.1:3003`

//获取文章列表
export const all = async ()=>{
  const {response,request}= await useApi<Article[]>(`${host}/articles`)
  request()
  return {response}
}

export const find = async (id:number)=>{
  const {response,request}= await useApi<Article>(`${host}/articles/${id}`)
  request()
  return {response}
}