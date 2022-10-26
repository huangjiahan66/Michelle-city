import mobileApi from "../../api/mobile";
import { storeBehavior } from "../../behavior/storeBehavior";
import { appStore } from "../../store/index";

// pages/me/settings.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile:appStore.currentUser?.mobile,
    gender:appStore.currentUser?.gender,
    birthday:appStore.currentUser?.birthDay,
    loading:false
  },
  behaviors:[storeBehavior],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    if (!appStore.currentUser) {
      wx.navigateBack()
    }
    this.setData({
      // 数据初始化
      mobile:appStore.currentUser?.mobile,
      gender:appStore.currentUser?.gender,
      birthday:appStore.currentUser?.birthDay
    })
  },
 async  onMobileChange(){
    // console.log(event);
    const mobile= await mobileApi.get('123')
    this.setData({
      mobile
    })

  },
  onGenderChange(event:{detail:Gender}){
    this.setData({
      gender:event.detail
    })
  },
  bindBirthdayChange(event:{detail:{value:string}}){
     this.setData({
      birthday:event.detail.value
     })
  },
 async save(){
    this.setData({
      loading:true
    })
    await appStore.updateCurrentUser({
      mobile:this.data.mobile,
      gender:this.data.gender,
      birthDay:this.data.birthday
    })
    this.setData({
      loading:false
    })
    wx.showToast({
      title:'保存完成'
    })
  },
  handleLogout(){
    appStore.logout()
    wx.navigateBack()
    console.log('1');
    
  }

})