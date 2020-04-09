// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerSrc: "/images/oder/1.jpg",
    srcArr: [
      "/images/oder/1.jpg",
      "/images/oder/2.jpg",
      "/images/oder/3.jpg",
      "/images/oder/4.jpg",
      "/images/oder/5.jpg",
      "/images/oder/6.jpg",
      "/images/oder/7.jpg",
      "/images/oder/8.jpg",
      "/images/oder/9.jpg",
    ],
    currentIndex: 0
  },
  changeSrc(event) {

    let a =  event.currentTarget.dataset.index
    this.setData({
      currentIndex: a,
      bannerSrc:this.data.srcArr[a]
    })
  },
  goToTabBar(event){
    wx.switchTab({
      url: '/pages/menu/menu'
    })
  },
  goFoTabBar(event) {
    wx.navigateTo({
      url: '/pages/sc/sc'
    })
  }
})