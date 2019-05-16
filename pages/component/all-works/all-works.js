Component({
  properties: {
    currentTab:String
  },
  data:{
    studentWorks:[
      {
        title:'课堂瀑布型手捧～',
        image: ['https://wx2.sinaimg.cn/mw690/006ChjVJly1g30mp8w2nqj30u018wgv3.jpg', 'https://wx4.sinaimg.cn/mw690/006ChjVJly1g30mp9jn2qj30u018waii.jpg', 'https://wx1.sinaimg.cn/mw690/006ChjVJly1g30mp9wi0ij30u018wqcg.jpg', 'https://wx2.sinaimg.cn/mw690/006ChjVJly1g30mpb6exwj30u018wakl.jpg', 'https://wx2.sinaimg.cn/mw690/006ChjVJly1g30mpbyxgqj30u018wti1.jpg'],
      },
      {
        title: '二十七期全能创业第一天～',
        image: ['https://wx4.sinaimg.cn/mw690/006ChjVJly1g2rk90802gj318w0u0wra.jpg', 'https://wx4.sinaimg.cn/mw690/006ChjVJly1g2rk8zvxu2j318w0u0n9j.jpg', 'https://wx4.sinaimg.cn/mw690/006ChjVJly1g2rk90lcvdj30u018wqgw.jpg',
'https://wx4.sinaimg.cn/mw690/006ChjVJly1g2rk90xjkjj318w0u0tl2.jpg'],
      }
    ],
    weddingWorks:[
      {
        title: '爱斯薇尔&BC花派作品，\n拜占庭的神秘和现代感的时尚，\n像22年前的初识又像3年前的巧遇热烈、真实、美好以永恒为驻脚，\n剩下的时光与你相伴。',
        image: ['https://wx4.sinaimg.cn/mw690/006ChjVJly1g2zhs9vlkuj31940u0wy6.jpg', 'https://wx3.sinaimg.cn/mw690/006ChjVJly1g2zhsa84akj30u018y4df.jpg', 'https://wx1.sinaimg.cn/mw690/006ChjVJly1g2zhsapsu9j318y0u0tnh.jpg', 'https://wx3.sinaimg.cn/mw690/006ChjVJly1g2zhsbc5k8j318y0u0ano.jpg', 'https://wx2.sinaimg.cn/mw690/006ChjVJly1g2zhsbpcajj318y0u0wuc.jpg'],
      },
      {
        title: '花开漫天铺展成风景；\n眉眼中藏着清风微香；\n当最后一丝阳光洒在脸上；\n印出你浅浅可爱模样',
        image: ['https://wx1.sinaimg.cn/mw690/8f3a46edly1g2ua06gnw0j218g0tmh4i.jpg', 'https://wx4.sinaimg.cn/mw690/8f3a46edly1g2ua08mgg7j218g0tm4oy.jpg', 'https://wx2.sinaimg.cn/mw690/8f3a46edly1g2ua09fj9rj218g0tm151.jpg', 'https://wx1.sinaimg.cn/mw690/8f3a46edly1g2ua0awveuj218g0tme3v.jpg', 'https://wx3.sinaimg.cn/mw690/8f3a46edly1g2ua0c2q5oj20tm18g4di.jpg'],
      }
    ]

  },
  methods:{
    showImg:function(e){
      let src = e.currentTarget.dataset.src
      let imgList = e.currentTarget.dataset.list;
      wx.previewImage({
        current:src,
        urls: imgList
      })
    }
  },
  created(){
   
  }
})