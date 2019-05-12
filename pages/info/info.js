// pages/info/info.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    item: {},
    teacher:{}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (app.item.pid == '0') {
      this.setData({
        item: app.item,
        teacher:app.teacherAll[0]
      })
    } else if (app.item.pid == '1') {
        this.setData({
          item: app.item,
          teacher: app.teacherAll[1]
        })
    } else if (app.item.pid == '2') {
        this.setData({
          item: app.item,
          teacher: app.teacherAll[2]
        })
    } else if (app.item.pid == '3') {
        this.setData({
          item: app.item,
          teacher: app.teacherAll[0]
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})