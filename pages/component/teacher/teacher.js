const app = getApp()

Component({
  data:{
    teacherAll:[
      {
        name:'Tony Stark',
        nikeImg:'../../../image/ironMan.png',
        info:"I am Iron Man",
        detail:'I am Iron Man,I am Iron Man I am Iron Man'
      },
      {
        name:'Michael Jackson',
        nikeImg:'../../../image/michaelJackson.png',
        info: 'Just beat it, beat it',
        detail: 'I am Iron Man,I am Iron Man I am Iron Man'
      },
      {
        name:'Peter Park',
        nikeImg: '../../../image/spiderMan.png',
        info: 'I am Spider Man',
        detail: 'I am Iron Man,I am Iron Man I am Iron Man'
      }
    ]
  },
  created () {
    app.teacherAll = this.__data__.teacherAll
  }
})