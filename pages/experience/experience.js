// pages/experience/experience.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"",
    hide:'',
    show:'',
    showColor:''
  },
  formSubmit: function(e){
    if(!e.detail.value.phone){
      this.setData({
        hide:'请输入手机号',
        show:'block',
        showColor:'0'
      })
      
    } else if (!e.detail.value.nikename){
      this.setData({
        hide:'请输入姓名',
        show: 'block',
        showColor: '0'
      })
    }else{
      this.setData({
        hide: '发送成功',
        show: 'block',
        showColor: '0'
      })
    }
  },
  showCode:function(){
    if(this.__data__.show == 'block'){
      if (this.__data__.hide == '发送成功'){
        wx.navigateBack({
          url: '../info/info',
        })
      }else{
        this.setData({
          show: '',
          showColor: ''
        })
      }
    }else{
      this.setData({
        show:'block',
        showColor: '0'
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title:app.title
    })
    wx.setNavigationBarTitle({
      title: app.title + "体验课"
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