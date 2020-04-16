import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height, dpr) {
    const chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
    });
    canvas.setChart(chart);

    var option = {
        title: {
            text: '你阅读的' + app.globalData.bookName + '进度为',
            left: 'center'
        },
        backgroundColor: "#ffffff",
        color: ["#37A2DA", "#32C5E9", "#67E0E3"],
        series: [{
            name: '业务指标',
            type: 'gauge',
            detail: {
                formatter: '{value}%'
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 30,
                    shadowBlur: 0,
                    color: [
                        [0.3, '#67e0e3'],
                        [0.7, '#37a2da'],
                        [1, '#fd666d']
                    ]
                }
            },
            data: [{
                value: (app.globalData.scrollTop * 100),
                name: '完成率',
            }]

        }]
    };

    chart.setOption(option, true);

    return chart;
}

Page({
    onShareAppMessage: function(res) {
        return {
            title: 'ECharts 可以在微信小程序中使用啦！',
            path: '/pages/index/index',
            success: function() {},
            fail: function() {}
        }
    },
    data: {
        ec: {
            onInit: initChart
        }
    },
    goToBook: function() {
        if (app.globalData.index === 0) {
            wx.redirectTo({
                url: '/pages/books/index'
            })
        } else if (app.globalData.index === 1) {
            wx.redirectTo({
                url: '/pages/pybooks/index'
            })
        } else if (app.globalData.index === 2) {
            wx.redirectTo({
                url: '/pages/cbooks/index'
            })
        } else if (app.globalData.index === 3) {
            wx.redirectTo({
                url: '/pages/c++books/index'
            })
        } else if (app.globalData.index === 4) {
            wx.redirectTo({
                url: '/pages/mathbooks/index'
            })
        }
    }
});