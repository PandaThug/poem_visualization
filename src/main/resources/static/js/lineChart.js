let xLabel = ['3/12', '3/13', '3/14', '3/15', '3/16', '3/17']
let goToSchool = ["40", "60", "22", "85", "50", "40"]
let optionline = {
    backgroundColor: 'white',
    grid: {
        top: '15%',
        left: '3%',
        right: '3%',
        bottom: '20%',
        // containLabel: true
    },
    xAxis: [{
        // type: 'category',
        boundaryGap: false,
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                color: 'rgba(101, 124, 168, 0.4)'
            },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: '#000',
                padding: 12,
                fontSize: 12
            },
            formatter: function (data) {
                return data
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(101, 124, 168, 0.4)'
            },
        },
        data: xLabel
    }],
    yAxis: [{
        nameTextStyle: {
            color: "#000",
            fontSize: 12,
            padding: 10
        },
        min: 0,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(101, 124, 168, 0.4)'
            },
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(101, 124, 168, 0.4)"
            }

        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#000',
                padding: 16
            },
            formatter: function (value) {
                if (value === 0) {
                    return value
                }
                return value
            }
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
        type: 'line',
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 12,
        smooth: true,
        lineStyle: {
            normal: {
                width: 3,
                color: "#3DE0F3", // 线条颜色
            },
            type: 'solid',
            // borderColor: 'rgba(0,0,0,.4)',
        },
        itemStyle: {
            color: '#fff',
            borderWidth: 2,
            borderColor: '#3DE0F3',
        },
        tooltip: {
            show: true
        },
        label: {
            show: false,
        },
        areaStyle: { //区域填充样式
            normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: "rgba(61, 224, 243,.8)"


                },
                    {
                        offset: 1,
                        color: "rgba(61, 224, 243, 0.1)"
                    }
                ], false),
                shadowColor: 'rgba(25,163,223, 0.5)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
        },
        data: goToSchool
    }]
};

var lineChart = echarts.init(document.querySelector('.lineChart'));
lineChart.setOption(optionline);