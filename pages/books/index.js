// pages/cbooks/index.js
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

    },

    /**
     * 组件的方法列表
     */
    methods: {
        onPageScroll: function() {
            const query = wx.createSelectorQuery()
            query.select('#the-id').boundingClientRect()
            query.selectViewport().scrollOffset()
            query.exec(function(res) {
                res[1].scrollTop // 显示区域的竖直滚动位置
                res[0].height
                res[0].bottom
                console.log("scrollTop", res[1].scrollTop)
                console.log("h", res[0].height)
                console.log(res)
                app.globalData.scrollTop = Math.floor(((res[1].scrollTop + 700) / res[0].height) * 100) / 100
                console.log(app.globalData.scrollTop)
            })
        }
    }
})