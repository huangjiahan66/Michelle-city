import { storeBehavior } from "../../behavior/storeBehavior"
import { appStore } from "../../store/index";
// pages/me/index.ts
Page({

  /**
   * 页面的初始数据
   */
  behaviors:[storeBehavior],
  data: {
   paddingTop:0,
   menuList: [
    {
      title: '兑换码',
      icon: 'qr'
    },
    {
      title: '隐私协议',
      icon: 'shield-o'
    },      {
      title: '用户服务协议',
      icon: 'records'
    },
    {
      title: '经营信息公示',
      icon: 'notes-o'
    }
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const {bottom} =wx.getMenuButtonBoundingClientRect() //80
    this.setData({
      paddingTop:bottom
    })
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getTabBar().init()
  },
  goToLogin(){
    wx.navigateTo({
      url:'/pages/login/index'
    })
  },
  goToSettings(){
    if (appStore.currentUser) {
      wx.navigateTo({
        url:'/pages/me/settings'
      })
    }
  }
})