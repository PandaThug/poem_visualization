//控制气泡图的切换，0是情感，1是意象，默认0
let bubbleMode=0;
let bubbleChart = echarts.init(document.querySelector('.bubbleBox'));
let bubbleOptions
//气泡的颜色
let color = [
    new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
        offset: 0, //YELLOW
        color: 'rgba(254,220,91, 1)'
    }, {
        offset: 1,
        color: 'rgba(250,192,61,1)'
    }]),
    new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
        offset: 0,
        color: 'rgba(216,222,138, 1)'
    }, {
        offset: 1,
        color: 'rgba(205,209,113,1)'
    }]),
    new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
        offset: 0, //PINK
        color: 'rgba(236, 176, 193, 1)',
    },
        {
            offset: 1,
            color: 'rgba(221,107,123, 1)',
        },
    ]),
    new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
        offset: 0, //RED
        color: 'rgba(243, 166, 148, 1)',
    },
        {
            offset: 1,
            color: 'rgba(238, 121, 89, 1)',
        },
    ]),
    new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
        offset: 0, //GREEN
        color: 'rgba(192, 214, 149, 1)',
    },
        {
            offset: 1,
            color: 'rgba(169, 190, 123, 1)',
        },
    ]),
    new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
        offset: 0, //BLUE
        color: 'rgba(174,208,238,1)',
    },
        {
            offset: 1,
            color: 'rgba(110,155,197,1)',
        },
    ]),
    new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
        offset: 0,
        color: 'rgba(210,175,157,1)',
    },
        {
            offset: 1,
            color: 'rgba(188,131,107,1)',
        },
    ]),
    new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
        offset: 0, //purple
        color: 'rgba(211,201,214, 1)',
    },
        {
            offset: 1,
            color: 'rgba(166,126,183, 1)',
        },
    ]),
];

function updateBubbles(){
    if(showMode==0){//全局
        if(bubbleMode == 0){
            axios('http://localhost:8080/visualization/poem/emo')
                .then(function (response){
                    // if(response.data!="")
                    updateBubbles2(response);
                }).catch(function (err) {
                console.log(err)
            });
        }
        else if(bubbleMode == 1){
            axios('http://localhost:8080/visualization/poem/images')
                .then(function (response){
                    // if(response.data!="")
                    updateBubbles2(response);
                }).catch(function (err) {
                // console.log(err)
            });
        }
    }
    else if(showMode==1)//未指定诗人，指定时间。
    {
        if(bubbleMode == 0){
            axios('http://localhost:8080/visualization/poem/emo/?beginTime='+beginTime+"&endTime="+endTime)
                .then(function (response){
                    // if(response.data!="")
                    updateBubbles2(response);
                }).catch(function (err) {
                console.log(err)
            });
        }
        else if(bubbleMode == 1){
            axios('http://localhost:8080/visualization/poem/images/?beginTime='+beginTime+"&endTime="+endTime)
                .then(function (response){
                    // if(response.data!="")
                    updateBubbles2(response);
                }).catch(function (err) {
                console.log(err)
            });
        }
    }
    else if(showMode==2)//未指定时间，指定诗人。
    {
        if(bubbleMode == 0){
            axios('http://localhost:8080/visualization/poem/emo/?name='+poetName)
                .then(function (response){
                    // if(response.data!="")
                    updateBubbles2(response);
                }).catch(function (err) {
                console.log(err)
            });
        }
        else if(bubbleMode == 1){
            axios('http://localhost:8080/visualization/poem/images/?name='+poetName)
                .then(function (response){
                    // if(response.data!="")
                    updateBubbles2(response);
                }).catch(function (err) {
                console.log(err)
            });
        }
    }
    else if(showMode==3)//指定时间，指定诗人。
    {
        if(bubbleMode == 0){
            axios('http://localhost:8080/visualization/poem/emo/?name='+poetName+'&beginTime='+beginTime+"&endTime="+endTime)
                .then(function (response){
                    // if(response.data!="")
                    updateBubbles2(response);
                }).catch(function (err) {
                console.log(err)
            });
        }
        else if(bubbleMode == 1){
            axios('http://localhost:8080/visualization/poem/images/?name='+poetName+'&beginTime='+beginTime+"&endTime="+endTime)
                .then(function (response){
                    // if(response.data!="")
                    updateBubbles2(response);
                }).catch(function (err) {
                console.log(err)
            });
        }
    }
}

//初始化意象气泡
function initImageChart(data = [], format = []) {
    let [maxValue, temp] = [0, []]
    data.forEach(item => {
        temp.push(item[format[1]])
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
        let curIndex = Math.round(Math.random() * bakeColor.length)
        let size = (item[format[1]] + Math.round(maxValue * 0.5)) / maxValue * 70 // 气泡大小

        bubbleData.push({
            "name": item[format[0]],
            "value": item[format[1]],
            "symbolSize": size,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "color": bakeColor[curIndex],
                }
            },
            "label": {
                "normal": {
                    "fontSize": size * 0.5
                }
            }
        })
    }
    bubbleOptions = {
        title: {
            text: '意象词云',
            top: '2%',
            left: '2%',
            textStyle: {
                fontSize: 30,
                color: '#000',
                fontFamily: 'cursive'
            }
        },
        animationEasingUpdate: 'bounceIn',
        tooltip: {//提示框组件
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
}
//初始化情感气泡
function initEmotionChart(data = [], format = []) {
    let [maxValue, temp] = [0, []]
    data.forEach(item => {
        temp.push(item[format[1]])
    })
    maxValue = Math.max.apply(null, temp)
    // 气泡颜色数组
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
    let curIndex=0;
    for (let item of data) {
        let size = (item[format[1]] + Math.round(maxValue * 0.5)) / maxValue * 70 // 气泡大小
        bubbleData.push({
            "name": item[format[0]],
            "value": item[format[1]],
            "symbolSize": size,
            "draggable": true,
            "itemStyle": {
                "normal": {
                    "color": color[curIndex],
                }
            },
            "label": {
                "normal": {
                    "fontSize": size * 0.5
                }
            }
        })
        curIndex++;
    }
    bubbleOptions = {
        title: {
            text: '情感词云',
            top: '2%',
            left: '2%',
            textStyle: {
                fontSize: 30,
                color: '#000',
                fontFamily: 'cursive'
            }
        },
        animationEasingUpdate: 'bounceIn',
        tooltip: {//提示框组件
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
                        color: '#fff',
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
}
function updateBubbles2(response){
    let dataTest=[];
    for(key in response.data){
        let obj={};
        obj["name"]=key;
        obj["value"]=response.data[key];

        dataTest.push(obj);
    }
    dataTest.sort((a,b)=>{ return b.value-a.value});
    dataTest=dataTest.slice(1,16);//截取1-(n-1)名
    if(bubbleMode == 0)
    {
        initEmotionChart(dataTest, ['name', 'value']);

    }
    else if(bubbleMode==1){
        initImageChart(dataTest, ['name', 'value']);
    }
    bubbleChart.clear()
    bubbleChart.setOption(bubbleOptions)
    window.addEventListener("resize", function() {
        bubbleChart.resize();
    });
}