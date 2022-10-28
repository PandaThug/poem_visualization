// 测试数据
var data = [{
    name: '花',
    value: 10000
}, {
    name: '风',
    value: 6181
}, {
    name: '山',
    value: 4386
}, {
    name: '月',
    value: 4055
}, {
    name: '梅',
    value: 2467
}, {
    name: '亭台',
    value: 2244
}, {
    name: '楼阁',
    value: 1898
}, {
    name: '寒蝉',
    value: 1484
}, {
    name: '高楼',
    value: 1112
}, {
    name: '草',
    value: 965
}, {
    name: '湖',
    value: 847
}, ];
let color = [
    new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
            offset: 0,
            color: 'rgba(238, 162, 164, 1)',
        },
        {
            offset: 1,
            color: 'rgba(234, 114, 147, 0.2)',
        },
    ]),
    new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(123, 109, 158, 1)',
        },
        {
            offset: 1,
            color: 'rgba(167, 168, 189, 0.2)',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
            offset: 0,
            color: 'rgba(84, 30, 36, 1)',
        },
        {
            offset: 1,
            color: 'rgba(98, 16, 46, 0.2)',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
            offset: 0,
            color: 'rgba(118, 102, 77, 1)',
        },
        {
            offset: 1,
            color: 'rgba(168, 132, 98, 0.2)',
        },
    ]),
    new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(120, 146, 98, 1)',
        },
        {
            offset: 0.5,
            color: 'rgba(163, 226, 197, 0.5)',
        },
        {
            offset: 1,
            color: 'rgba(239, 222, 176, 0.2)',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
            offset: 0,
            color: 'rgba(144, 125, 228, 1)',
        },
        {
            offset: 1,
            color: 'rgba(33, 223, 209, 0.2)',
        },
    ]),
    new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
            offset: 0,
            color: 'rgba(169, 129, 117, 1)',
        },
        {
            offset: 1,
            color: 'rgba(179, 109, 97, 0.7)',
        },
    ]),
    // new echarts.graphic.LinearGradient(1, 0, 0, 1, [{
    //         offset: 0,
    //         color: 'rgba(237, 87, 254, 1)',
    //     },
    //     {
    //         offset: 0.5,
    //         color: 'rgba(255, 51, 250, 0.5)',
    //     }
    // ]),
    new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
            offset: 0,
            color: 'rgba(217, 182, 18, 1)',
        },
        {
            offset: 1,
            color: 'rgba(239, 222, 176, 1)',
        },
    ]),
];

function initBubbleChart(data = [], format = []) {
    let [maxValue, temp] = [0, []]
    data.forEach(item => {
        temp.push(item[format[1]])
        console.log(item);
    })
    maxValue = Math.max.apply(null, temp)
        // 气泡颜色数组
    let bakeColor = color
    let bubbleData = [] // 气泡数据
    let repulsion = 150 // 气泡间距

    // 根据气泡数量配置基础大小和斥力因子
    if (data.length >= 5 && data.length < 10) {
        repulsion = 120
    }
    if (data.length >= 10 && data.length < 20) {
        repulsion = 80
    } else if (data.length >= 20) {
        repulsion = 50
    }
    for (let item of data) {
        // 气泡数据条数少于或等于气泡颜色数组大小时，气泡颜色不重复
        if (!bakeColor.length) bakeColor = color
        let colorSet = new Set(bakeColor)
        let curIndex = Math.round(Math.random() * (colorSet.size - 1))
        let curColor = bakeColor[curIndex]
        colorSet.delete(curColor)
        bakeColor = colorSet
        let size = (item[format[1]] + Math.round(maxValue * 0.5)) / maxValue * 70 // 气泡大小

        bubbleData.push({
            "name": item[format[0]],
            "value": item[format[1]],
            "symbolSize": size,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "color": curColor,
                }
            },
            "label": {
                "normal": {
                    "fontSize": size * 0.5
                }
            }
        })
    }
    var emotionChart = echarts.init(document.querySelector('.emotionBox'));
    let bubbleOptions = {
        title: {
            text: '情感词云',
            top: '2%',
            left: '2%',
            textStyle: {
                fontSize: 30,
                color: '#f3f8f1', //茶白
                fontFamily: 'cursive'
            }
        },
        animationEasingUpdate: 'bounceIn',
        tooltip: {
            trigger: 'item',
            textStyle: {
                fontFamily: 'cursive',
            },
            formatter: function(params) {
                if (params['data']['name'] !== '') {
                    return '<b>' + params['data']['name'] + '</b>：<b>' + params['data']['value'] + ' </b>';
                }
            },
        },
        series: [{
            type: 'graph',
            layout: 'force',
            force: {
                repulsion: repulsion,
                edgeLength: 10
            },
            // 是否开启鼠标缩放和平移漫游
            roam: false,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#f3f8f1',
                        fontFamily: '楷体',
                    }
                }
            },
            data: bubbleData,
            emphasis: { // 单词高亮时显示的效果
                shadowBlur: 10,
                shadowColor: '#333',
                itemStyle: {
                    color: '#B36D61'
                }
            },
        }]
    }
    emotionChart.setOption(bubbleOptions)
    window.addEventListener("resize", function() {
        emotionChart.resize();
    });
}


//后面会改成触发按钮时，发出请求更新数据
var poetName="白居易";
axios('http://localhost:8080/visualization/poem/images?name='+poetName)
.then(function (response) {
    console.log(response.data)
}).catch(function (err) {
    console.log(err)
});



initBubbleChart(data, ['name', 'value']);