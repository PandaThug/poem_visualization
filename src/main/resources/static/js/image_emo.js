//控制气泡图的切换，0是情感，1是意象，默认0
let bubbleMode=0;
let bubbleChart = echarts.init(document.querySelector('.bubbleBox'));
let bubbleOptions
colorBubble=['#89b5cb','#fedfa6','#c1d0e5','#b6e1d0','#e9bbb2','#95d4dd','#f1c7a7','#bccbc3']
colorBubble2=['#a1d0e7','#ffeac2','#d8e1ef','#d2f1e5','#f5d7d1','#b4dde3','#fbdbc2','#d0ddd6']
colorTitle='#b78f83';
colorBubbleClick='#fdb988';
//气泡的颜色
let color = [
    new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
        offset: 0, //YELLOW
        color: colorBubble2[0]
    }, {
        offset: 1,
        color: colorBubble[0]
    }]),
    new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
        offset: 0,
        color: colorBubble2[1]
    }, {
        offset: 1,
        color: colorBubble[1]
    }]),
    new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
        offset: 0, //PINK
        color: colorBubble2[2]
    },
        {
            offset: 1,
            color: colorBubble[2]
        },
    ]),
    new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
        offset: 0, //RED
        color: colorBubble2[3]
    },
        {
            offset: 1,
            color: colorBubble[3]
        },
    ]),
    new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
        offset: 0, //GREEN
        color: colorBubble2[4]
    },
        {
            offset: 1,
            color: colorBubble[4]
        },
    ]),
    new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
        offset: 0, //BLUE
        color: colorBubble2[5]
    },
        {
            offset: 1,
            color: colorBubble[5]
        },
    ]),
    new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
        offset: 0,
        color: colorBubble2[6]
    },
        {
            offset: 1,
            color: colorBubble[6]
        },
    ]),
    new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
        offset: 0, //purple
        color: colorBubble2[7]
    },
        {
            offset: 1,
            color: colorBubble[7]
        },
    ]),
];

function updateBubbles(){
    if(showMode==0){//全局
        if(bubbleMode == 0){
            axios('http://localhost:8080/visualization/poem/emo')
                .then(function (response){
                    updateBubbles2(response);
                }).catch(function (err) {
                console.log(err)
            });
        }
        else if(bubbleMode == 1){
            axios('http://localhost:8080/visualization/poem/images')
                .then(function (response){
                    updateBubbles2(response);
                }).catch(function (err) {
            });
        }
    }
    else if(showMode==1)//未指定诗人，指定时间。
    {
        if(bubbleMode == 0){
            axios('http://localhost:8080/visualization/poem/emo/?beginTime='+beginTime+"&endTime="+endTime)
                .then(function (response){
                    updateBubbles2(response);
                }).catch(function (err) {
                console.log(err)
            });
        }
        else if(bubbleMode == 1){
            axios('http://localhost:8080/visualization/poem/images/?beginTime='+beginTime+"&endTime="+endTime)
                .then(function (response){
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
                    updateBubbles2(response);
                }).catch(function (err) {
                console.log(err)
            });
        }
        else if(bubbleMode == 1){
            axios('http://localhost:8080/visualization/poem/images/?name='+poetName)
                .then(function (response){
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
                    updateBubbles2(response);
                }).catch(function (err) {
                console.log(err)
            });
        }
        else if(bubbleMode == 1){
            axios('http://localhost:8080/visualization/poem/images/?name='+poetName+'&beginTime='+beginTime+"&endTime="+endTime)
                .then(function (response){
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
    let bubbleData = [] // 气泡数据
    let repulsion = 180 // 气泡间距
    for (let item of data) {
        let curIndex = Math.floor(Math.random() * color.length)
        let size = item[format[1]] / maxValue * 80 +50// 气泡大小
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
    }
    bubbleOptions = {
        title: {
            text: '意象词云',
            top: '2%',
            left: '7%',
            textStyle: {
                fontSize: 40,
                color: colorTitle,
                fontFamily: 'cursive'
            }
        },
        animationEasingUpdate: 'bounceIn',
        //提示框
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
            roam: true,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#000',
                        fontFamily: '楷体',
                    }
                }
            },
            data: bubbleData,
            emphasis: { // 单词高亮时显示的效果
                shadowBlur: 10,
                shadowColor: '#333',
                itemStyle: {
                    color: colorBubbleClick
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
    let bubbleData = [] // 气泡数据
    let repulsion = 180 // 气泡间距
    let curIndex=0;
    for (let item of data) {
        let size = item[format[1]] / maxValue * 80 +50// 气泡大小
        let curIndex = Math.floor(Math.random() * color.length)
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
                    "fontSize": size * 0.4,
                }
            }
        })
    }
    bubbleOptions = {
        title: {
            text: '情感词云',
            top: '2%',
            left: '7%',
            textStyle: {
                fontSize: 40,
                color: colorTitle,
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
                    color: colorBubbleClick
                }
            },
        }]
    }
}
function updateBubbles2(response){
    let dataTest=[];
    for(key in response.data){
        let obj={};
        if(response.data[key]!=0) {
            obj["name"] = key;
            obj["value"] = response.data[key];

            dataTest.push(obj);
        }
    }
    dataTest.sort((a,b)=>{ return b.value-a.value});
    dataTest=dataTest.slice(1,11);//截取1-(n-1)名
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