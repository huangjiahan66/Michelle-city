import request from "./request"
import { ListResult, Store } from "./types"

const list=()=>{
  return request<ListResult<Store>>('GET','/stores')
}
export default {
  list
}