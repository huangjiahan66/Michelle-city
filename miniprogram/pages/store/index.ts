import storeApi from "../../api/store"
import {  Location, Paging, Store } from "../../api/types";
import { StoreStatus } from "../../enums/StoreStatus";
import { MapMarker } from "./types";
const computedBehavior = require('miniprogram-computed').behavior
// pages/store/index.ts
Page({
  behaviors:[computedBehavior],
  data: {
    paging:<Paging>{
      page:1,
      size:10,
      total:10
    },
    storeList:<Array<Store>>[],
    storeStatusDict:StoreStatus,
    currentLocation:<Location | null> null,
    markers:<MapMarker[]>[]
  },
  computed:{
    markers(data:{storeList:Store[]}):MapMarker[]{
      return data.storeList.map((item,index)=>{
        return {
          id:index+1,
          title:item.name,
          latitude:item.location.latitude,
          longitude:item.location.longitude,
          iconPath:'../../assets/images/logo.JPG',
          width:'55rpx',
          height:'55rpx'
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
   this.fetchData()
   wx.getLocation({
    type: 'wgs84',
    success :(res)=> {
      const {latitude,longitude}=res
      this.setData({
        currentLocation:{
          latitude,longitude
        }
      })
      
    }
   })

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