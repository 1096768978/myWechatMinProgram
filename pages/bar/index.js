import * as echarts from '../../ec-canvas/echarts';
var app = getApp();

let chart = null;

function initChart(canvas, width, height, dpr) {
    chart = echarts.init(canvas, null, {
        width: width,
        height: height,
        devicePixelRatio: dpr // new
    });
    canvas.setChart(chart);

    var option = {
        color: ['#37a2da', '#32c5e9', '#67e0e3'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            confine: true
        },
        legend: {
            data: ['总分', '得分', '丢分']
        },
        grid: {
            left: 20,
            right: 20,
            bottom: 15,
            top: 40,
            containLabel: true
        },
        xAxis: [{
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#999'
                }
            },
            axisLabel: {
                color: '#666'
            }
        }],
        yAxis: [{
            type: 'category',
            axisTick: { show: false },
            //data: ['Java', 'C++', '算法', 'JavaScript', 'Python'],
            data: ['前端基础题'],
            axisLine: {
                lineStyle: {
                    color: '#999'
                }
            },
            axisLabel: {
                color: '#666'
            }
        }],
        series: [{
                name: '总分',
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                //data: [300, 270, 340, 344, 300],
                data: [app.globalData.count],
                itemStyle: {
                    // emphasis: {
                    //   color: '#37a2da'
                    // }
                }
            },
            {
                name: '得分',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true
                    }
                },
                //data: [280, 238, 219, 210, 210],
                data: [app.globalData.rightcount],
                itemStyle: {
                    // emphasis: {
                    //   color: '#32c5e9'
                    // }
                }
            },
            {
                name: '丢分',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'left'
                    }
                },
                //data: [-20, -32, -21, -34, -90],
                data: [app.globalData.errorcount],
                itemStyle: {
                    // emphasis: {
                    //   color: '#67e0e3'
                    // }
                }
            }
        ]
    };
    chart.setOption(option);
    return chart;
}

Page({
    data: {
        // errorcount: 0,
        // rightcount: 0,
        // count: 0,
        // sum: 0,
        ec: {
            onInit: initChart
        }
    },
    onLoad: function(data) {
        const eventChannel = this.getOpenerEventChannel()
            // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
        eventChannel.on('acceptDataFromOpenerPage', (data) => {
            // this.count = data.count
            // this.errorcount = (data.errorcount * 2)
            // this.sum = (data.errorcount + data.rightcount) * 5
            // chart.setOption({
            //     series: [{
            //             // 根据名字对应到相应的系列
            //             name: '总分',
            //             data: this.data.sum
            //         },
            //         {
            //             name: '得分',
            //             data: this.data.count
            //         },
            //         {
            //             name: '总分',
            //             data: this.data.errorcount
            //         }
            //     ]
            // })
            console.log(111, this.data)
        })
    },
    onShareAppMessage: function(res) {
        return {
            title: 'ECharts 可以在微信小程序中使用啦！',
            path: '/pages/index/index',
            success: function() {},
            fail: function() {}
        }
    },

    onReady() {
        setTimeout(function() {
            // 获取 chart 实例的方式
            // console.log(chart)
        }, 2000);
    }
});