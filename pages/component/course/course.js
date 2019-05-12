
const app = getApp()

Component({
  data:{
    courseAll:[
      {
        pid:'0',
        title:"全能创业班",
        img:"../../../image/4.jpg",
        money:'3680',
        discountMoney:'3180',
        sold:'20',
        course: '0-永生花的制作与实操，婚礼花车的制作与实操，花店的经营与管理',
      },
      {
        pid: '1',
        title: "婚礼宴会班",
        img: "../../../image/5.jpg",
        money: '2880',
        discountMoney: '2580',
        sold: '25',
        course: '1-永生花的制作与实操，婚礼花车的制作与实操，花店的经营与管理',
      },
      {
        pid: '2',
        title: "气球派对班",
        img: "../../../image/6.jpg",
        money: '2280',
        discountMoney: '2080',
        sold: '28',
        course:'2-永生花的制作与实操，婚礼花车的制作与实操，花店的经营与管理'
      },
      {
        pid: '3',
        title: "周末兴趣班",
        img: "../../../image/7.jpg",
        money: '1680',
        discountMoney: '1580',
        sold: '10',
        course: '3-永生花的制作与实操，婚礼花车的制作与实操，花店的经营与管理',
      }
    ]
  },
  methods:{
    goToNext: function (e) {
      app.item = e.currentTarget.dataset.item
      wx.navigateTo({
        url: '../info/info'
      })
    }
  }
})