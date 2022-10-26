import { observable, action } from "mobx-miniprogram";
import tokenApi from "../api/token";
import userApi from "../api/user";
const TOKEN_STORAGE_KEY = 'token'
const CURRENT_USER_STORAGE_KEY = 'current-user'
export const appStore = observable({
  token: <string | null>wx.getStorageSync(TOKEN_STORAGE_KEY),
  currentUser: <UserType | null>wx.getStorageSync(CURRENT_USER_STORAGE_KEY),
  activeTabbar: 0,
  //方法
  login: action(async function () {
    const token = await tokenApi.create('123')
    appStore.setToken(token)
    appStore.fetchCurrentUser()
    wx.showToast({
      title: '登录成功',
      icon: 'success'
    })

    getCurrentPages().pop() ? wx.navigateBack() : wx.switchTab({
      url: '/pages/index/index'
    })
  }),
  setToken: action(function (token: string) {
    appStore.token = token
    wx.setStorageSync(TOKEN_STORAGE_KEY, token)
  }),
  fetchCurrentUser: action(async function () {
    const currentUser = await userApi.current() //拿到用户信息
    console.log(currentUser);

    appStore.setCurrentUser(currentUser)
  }),
  setCurrentUser: action(function (currentUser: UserType) {
    appStore.currentUser = currentUser
    wx.setStorageSync(CURRENT_USER_STORAGE_KEY, currentUser)
  }),

  // 退出操作
  logout: action(function () {
    appStore.token = ''
    appStore.currentUser = null
    wx.setStorageSync(TOKEN_STORAGE_KEY, '')
    wx.setStorageSync(CURRENT_USER_STORAGE_KEY, null)
  }),

  switchTab: action(function (value: number) {
    appStore.activeTabbar = value
  }),
  updateCurrentUser: action(async function (userUpdateRequest: UserUpdateRequest) {
    const updatedUser = await userApi.updateCurrent(userUpdateRequest)
    appStore.setCurrentUser(updatedUser)
  })
})