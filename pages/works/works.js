// var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

// Page({
//   data: {
//     tabs: ["学员作品", "婚礼作品"],
//     activeIndex: 0,
//     // 页面的切换是通过改变偏移量实现的
//     sliderOffset: 0,
//     sliderLeft: 0
//   },
//   onLoad: function () {
//     var that = this;
//     wx.getSystemInfo({
//       success: function (res) {
//         that.setData({
//           sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
//           sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
//         });
//       }
//     });
//   },
//   tabClick: function (e) {
//     console.log(e.currentTarget.offsetLeft);
//     this.setData({
//       sliderOffset: e.currentTarget.offsetLeft,
//       activeIndex: e.currentTarget.id
//     });
//   },
// });

var app = getApp()
Page({
  data: {
    /**
      * 页面配置
      */
    winWidth: 0,
    winHeight: 0,
    // tab切换
    currentTab: 0,
  },
  onLoad: function (options) {
    var that = this;
    /**
     * 获取系统信息
     */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
  },
  // onShow: function () {
  //   var that = this;
  //   var query = wx.createSelectorQuery();
  //   query.select('.swiper-view').boundingClientRect(function (rect) {
  //     console.log(that.data.widHeight)
  //     that.setData({
  //       // 获取要循环标签的高度
  //       // height: rect.height,
  //       widHeight: rect.height * 2
  //     })
  //     console.log(that.data.widHeight, 12313165)
  //   }).exec();
  // },
  /**
    * 滑动切换tab
    */
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  /**
   * 点击tab切换
   */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})