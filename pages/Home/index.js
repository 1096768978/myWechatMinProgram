// pages/Home/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  
  /**
   * 组件的初始数据
   */
  data: {
    getInput:null,
    booksList: [{
      book: 'JavaScript从入门到精通',
      id:1
      },
      {book: '一周学会python',
        id:2
      },
      {book: 'C语言程序设计',
        id:3
      },
      {book: 'C++进阶教程',
      id:4
      },
      {book: '算法解读',
      id:5
      }],
    imgUrls: [
      '/images/lunbo1.jpg',
      '/images/lunbo2.jpg',
      '/images/lunbo3.jpg',
      '/images/lunbo4.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
  },
  /**
   * 组件的方法列表
   */
  methods: {
    studyJs:function(e) {
      console.log(e.currentTarget.id)
      if (e.currentTarget.id == 0){
        wx.navigateTo({
          url: '/pages/books/index',
        })
      } else if (e.currentTarget.id == 1){
        wx.navigateTo({
          url: '/pages/pybooks/index',
        })
      } else if (e.currentTarget.id == 2) {
        wx.navigateTo({
          url: '/pages/cbooks/index',
        })
      } else if (e.currentTarget.id == 3) {
        wx.navigateTo({
          url: '/pages/c++books/index',
        })
      } else if (e.currentTarget.id == 4) {
        wx.navigateTo({
          url: '/pages/mathbooks/index',
        })
      }
    },
    dialog:function() {
      wx.showModal({
        title: '立即下载App随时学习',
        content: '前往下载小罗学习App',
      })
    },
    search:function() {
      if (this.data.getInput === 'js' ||   this.data.getInput  === 'javaScript' ){
        wx.navigateTo({
          url: '/pages/books/index',
        })
      } else if (this.data.getInput === 'py'){
        wx.navigateTo({
          url: '/pages/pybooks/index',
        })
      } else if (this.data.getInput === 'c') {
        wx.navigateTo({
          url: '/pages/cbooks/index',
        })
      } else if (this.data.getInput === 'c++') {
        wx.navigateTo({
          url: '/pages/c++books/index',
        })
      } else if (this.data.getInput === '算法') {
        wx.navigateTo({
          url: '/pages/mathbooks/index',
        })
      }
      else{
      wx.navigateTo({
        url: '/pages/error/index',
      })}
    },
    getInput:function(e) {
      this.data.getInput= e.detail.value
    }
  }
})
