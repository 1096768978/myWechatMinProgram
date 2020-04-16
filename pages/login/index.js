// pages/login/index.js
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
        inputValueUser: '',
        inputValueKey: ''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        bindUserInput: function(e) {
            this.setData({
                inputValueUser: e.detail.value
            })
        },
        bindKeyInput: function(e) {
            this.setData({
                inputValueKey: e.detail.value
            })
        },
        goToHome: function() {
            if (this.data.inputValueUser == "admin" && this.data.inputValueKey == "123456") {
                wx.switchTab({
                    url: '/pages/Home/index'
                })
            } else {
                wx.showToast({
                    title: '账号或密码错误',
                    icon: 'loading',
                    duration: 1000,
                    mask: 'true'
                })
            }
        }
    }
})