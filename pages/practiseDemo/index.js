// pages/practiseDemo/index.js
// pages/game/game.js
var app = getApp();

function two_char(n) {
    return n >= 10 ? n : "0" + n;
}
Page({

    /**
     * 页面的初始数据
     */
    data: {
        questions: ['设置元素浮动后，该元素的 display 值是多少( )',
            '以下不是 canvas 的⽅方法是( )',
            '不是 input 在 html5 新的类型的是( )',
            'var temp=null，alert(typeof temp)弹出的结果是( )',
            '以下对 Ajax 描述不正确的是( )',
        ],
        questionsA: ['A.block', 'A.getContext()', 'A.datetime', 'A.Null', 'A.readyState 属性请求的状态，当值为 3 时是正在加载'],
        questionsB: ['B. 不变', 'B. fill()', 'B. file', 'B. Object', 'B.使用 XML 和 XSLT 进⾏行数据交换及相关操作'],
        questionsC: ['C. inline', 'C. stroke()', 'C. color', 'C. Undefined', 'C.总共有 8 种 callback'],
        questionsD: ['D. inline-block', 'D.controller', 'D. range', 'D. String', 'D.abort()⽅法，停⽌当前请求'],
        answer: ['A', 'D', 'B', 'B', 'A'],
        questionbody: '',
        A: '',
        B: '',
        C: '',
        D: '',
        Ans: '',
        show: '',
        countj: true,
        bindcount: 0,
        errorcount: 0,
        rightcount: 0,
        count: 0,
        time: '',
        index: '',
        transition: '',
        transform: '',
    },

    /*设置计数器5分钟*/
    onLoad: function(options) {
        var sec = options.sec;
        var that = this;
        var si = setInterval(function() {
            if (sec > 0) {
                sec--;
                var date = new Date(0, 0)
                date.setSeconds(sec);
                var h = date.getHours(),
                    m = date.getMinutes(),
                    s = date.getSeconds();
                that.setData({
                    time: two_char(h) + ":" + two_char(m) + ":" + two_char(s)
                })
                console.log(111)
            } else {
                var count = that.data.count;
                if (that.data.bindcount == 0) {
                    wx.showModal({
                        title: '提示：',
                        showCancel: false,
                        content: '开始作答请集中注意力',
                        success: function() {
                            wx.switchTab({
                                url: '',
                            })
                        }
                    })
                    clearInterval(si);
                } else {
                    clearInterval(si);
                    app.globalData.bindcount = that.data.bindcount;
                    app.globalData.errorcount = that.data.errorcount;
                    app.globalData.rightcount = that.data.rightcount;
                    wx.redirectTo({
                        url: '' + count,
                    })
                }
            }
        }, 1000);
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        this.refresh();
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },
    disp: function(e) {
        var id = e.currentTarget.id;
        var num = e.currentTarget.dataset.num;
        var count = e.currentTarget.dataset.count;
        var bindcount = e.currentTarget.dataset.bindcount;
        var rightcount = e.currentTarget.dataset.rightcount;
        var errorcount = e.currentTarget.dataset.errorcount;
        if (this.data.countj) {
            if (id == num) {
                this.setData({
                    show: '正确！',
                    count: count + 5,
                    countj: false,
                    bindcount: bindcount + 1,
                    rightcount: rightcount + 1,
                })
            } else {
                this.setData({
                    show: '错误！' + '答案：' + num,
                    count: count - 2,
                    countj: false,
                    bindcount: bindcount + 1,
                    errorcount: errorcount + 1,
                })
            }
        }
    },
    refresh: function() {
        this.setData({
            transform: this.data.transform = 'rotate(-180deg)',
            transition: this.data.transition = 'all 0.5s'
        })
        var that = this;
        var questions = that.data.questions;
        var questionsA = that.data.questionsA;
        var questionsB = that.data.questionsB;
        var questionsC = that.data.questionsC;
        var questionsD = that.data.questionsD;
        var answer = that.data.answer;
        var index = Math.floor(Math.random() * (questions.length - 1));
        if (questions.length > 0) {
            this.setData({
                questionbody: questions.splice(index, 1),
                A: questionsA.splice(index, 1),
                B: questionsB.splice(index, 1),
                C: questionsC.splice(index, 1),
                D: questionsD.splice(index, 1),
                Ans: answer.splice(index, 1),
                questions: questions,
                questionsA: questionsA,
                questionsB: questionsB,
                questionsC: questionsC,
                questionsD: questionsD,
                answer: answer,
                index: index,
                show: '',
                countj: true,
            })
        } else {
            let data = {
                count: '',
                rightcount: '',
                errorcount: ''
            }
            app.globalData.count = this.data.count
            app.globalData.rightcount = this.data.rightcount * 5
            app.globalData.errorcount = -(this.data.errorcount * 2)
            console.log(data)
            wx.showModal({
                title: '温馨提示',
                content: '题库已空～',
                confirmText: '查看分数',
                success(res) {
                    if (res.confirm) {
                        console.log('用户点击确定')
                        wx.navigateTo({
                            url: '/pages/bar/index',
                            success: function(res) {
                                // 通过eventChannel向被打开页面传送数据
                                res.eventChannel.emit('acceptDataFromOpenerPage', data)
                            }
                        })
                    } else if (res.cancel) {
                        console.log('用户点击取消')
                    }
                }
            })
        }
    },
})