import { observable,action } from "mobx-miniprogram";
import tokenApi from "../api/token";
const STORAGE_KEY='token'
export const appStore=observable({
  token:wx.getStorageSync(STORAGE_KEY),
  login:action(async function(){
    const token=await tokenApi.create('123')
    wx.showToast({
      title:'登录成功',
      icon:'success'
    })
    appStore.setToken(token)

    getCurrentPages().pop() ? wx.navigateBack() : wx.switchTab({
      url:'/pages/index/index'
    })
  }),
  setToken:action(function(token:string){
    appStore.token=token
    wx.setStorageSync(STORAGE_KEY,token)
  })
})