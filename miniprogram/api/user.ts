import request from "./request"

// 当前用户接口
const current=()=>{
  return request<UserType>('GET','/users/current')
}

//更新用户接口
const updateCurrent=(userUpdateRequest:UserUpdateRequest)=>{
  return request<UserType>('PUT','/users/current')
}
export default {
  current,
  updateCurrent
}