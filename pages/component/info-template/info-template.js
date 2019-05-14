const app = getApp()

Component({
  properties:{
    item:{
      type:Object
    },
    teacher:{
      type: Object
    }
  },
  methods:{
    nextPage:function(e){
      let title = e.currentTarget.id
      app.title = title
      wx.navigateTo({
        url: '../experience/experience',
      })
    }
  }
})