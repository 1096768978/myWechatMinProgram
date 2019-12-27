// pages/FormRe/index.js
var app = getApp();
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
    info: {
      sex: '',
      age: '',
      gra: '',
      book: '',
      model: '',
      place: '',
      phone: '',
      my: '',
    }
  },
  onLoad: function (options) {
    let info = options.info
    console.log(info)
  },
  /**
   * 组件的方法列表
   */
  methods: {
   onshow:function() {
     this.data.info = app.globalData
     console.log(this.data.info)
   },
   getinfo:function() {
     this.data.info = app.globalData
     console.log(this.data.info)
   }
  }
})
