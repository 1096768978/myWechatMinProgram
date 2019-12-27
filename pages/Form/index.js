// pages/Form/index.js
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
    checkFlag:false,
    showFlag: true,
    btnFlag: true,
    sex: '',
    age: '',
    gra: '',
    book: '',
    model: '',
    place: '',
    phone: '',
    my: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change: function(e) {
      if (e.detail.value == '') {
        this.setData({
          btnFlag: false,
          checkFlag:true,
        })
      } else {
        this.setData({
          btnFlag: true,
        })
      }
    },
    formSubmit: function(e) {
      this.setData({
        showFlag: false
      })
      this.setData({
        sex:e.detail.value.sex,
        age: e.detail.value.age,
        gra: e.detail.value.gra,
        book: e.detail.value.book,
        model: e.detail.value.model,
        place: e.detail.value.place,
        phone: e.detail.value.phone,
        my: e.detail.value.my,
      })
      console.log(this.data.sex)
    },
    formReset: function() {
      console.log('reset')
    },
    reStart:function() {
      this.setData({
        showFlag: true
      })
    }
  }
})