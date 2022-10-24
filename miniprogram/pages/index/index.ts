import pageApi from "../../api/page"
import navigate from "../../utils/navigate"
import { storeBehavior } from "../../behavior/storeBehavior"


Page({
  behaviors: [storeBehavior],

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:<SwiperData[]> [],
    iconNavigations:<IconNavigation[]> []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad() {
    const { swiper,iconNavigations } =  await pageApi.home()
    this.setData({
      swiperList: swiper,
      iconNavigations:iconNavigations
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
      this.getTabBar().init()
  },
  onIconNavigationTap(event:ItemPram){
    const { type,target}=event.currentTarget.dataset.item
    navigate.to(type,target)
  },
  goToLogin(){
    wx.navigateTo({
      url:'/pages/login/index'
    })
  },
  goToStore(){
    wx.switchTab({
      url:'/pages/store/index'
    })
  }

})