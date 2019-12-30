// pages/record/index.js
var time = require('../../utils/time.js');
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
    getInput: '历史搜索记录和搜索时间',
    history1: '没有记录',
    history2: '没有记录',
    history3: '没有记录',
    history4: '没有记录',
    date1: '',
    date2: '',
    date3: '',
    date4: '',
  },
  /**
   * 组件的方法列表
   */
  methods: {
    exit: function() {
      wx.navigateTo({
        url: '/pages/index/index',
      })
    },
    search: function() {
      var that = this
      var sjc = Date.parse(new Date()) / 1000
    if (this.data.getInput === 'js' || this.data.getInput === 'javaScript') {
        wx.navigateTo({
          url: '/pages/books/index',
        })
      } else if (this.data.getInput === 'py') {
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
      if (that.data.getInput === '没有记录') {
        that.setData({
          getInput: that.data.getInput
        })
      } else if (that.data.history1 === '没有记录') {
        that.setData({
            history1: that.data.getInput,
            date1: time.formatTimeTwo(sjc, 'Y/M/D h:m:s')
          }),
          console.log(date1)
      } else if (that.data.history2 === '没有记录') {
        that.setData({
          history2: that.data.getInput,
          date2: time.formatTimeTwo(sjc, 'Y/M/D h:m:s')
        })
      } else if (that.data.history3 === '没有记录') {
        that.setData({
          history3: that.data.getInput,
          date3: time.formatTimeTwo(sjc, 'Y/M/D h:m:s')
        })
      } else if (that.data.history4 === '没有记录') {
        that.setData({
          history4: that.data.getInput,
          date4: time.formatTimeTwo(sjc, 'Y/M/D h:m:s')
        })
      }
     else {
      wx.navigateTo({
        url: '/pages/error/index',
      })
    }
  },
  getInput: function(e) {
    this.data.getInput = e.detail.value
  }
}
})