// pages/meinfo/meinfo.js
const app = getApp()

Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    nickUrl:'',
    nickName:'',
    upName:'',
    upImg:''
  },
  updateImage:function(){
    var that = this
    wx.chooseImage({
      count:1,
      success: function(res) {
        app.nickUrl = res.tempFilePaths[0]
        that.setData({
          nickUrl: res.tempFilePaths[0]
        })
      },
    })
  },
  updateName:function(){
    wx.navigateTo({
      url: '../upname/upname',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      nickUrl: app.user.avatarUrl,
      nickName: app.user.nickName
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      upName: app.nickName,
      upImg: app.nickUrl
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})