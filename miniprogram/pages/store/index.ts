import storeApi from "../../api/store"
import {  Paging, Store } from "../../api/types";
import { StoreStatus } from "../../enums/StoreStatus";

// pages/store/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    paging:<Paging>{
      page:1,
      size:10,
      total:10
    },
    storeList:<Array<Store>>[],
    storeStatusDict:StoreStatus
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
   this.fetchData()
  },
 async fetchData(){
    const { paging,data }=await storeApi.list()
    this.setData({
      paging,
      storeList:data
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getTabBar().init()
  },

})