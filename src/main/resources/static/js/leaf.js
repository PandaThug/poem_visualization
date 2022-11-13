var test = [
    ["", "", "", "", "", "","", "", "", "", "", "","", "", ""],
    [

    ],//1
    [

    ],
    [

    ],
    [

    ],
    [

    ],//5
    [

    ],
    [

    ],
    [

    ],
    [

    ],
    [

    ],//10
    [

    ],
    [

    ],
    [

    ],
    [

    ],
    [

    ],//15
]
//为了初始化样式能够装满 必须要有15个测试用例，在初始化时会将数据覆盖，但图例样式受到保留
var mySeries = []
var x, y, gap
var pieChart = echarts.init(document.querySelector('.innerLeaf'))
for (var key in test) {

    //console.log("初始化",test[key]);
    if (key != 0) {
        // 一排放三个
        if (key % 3 == 1)
            x = '16.6%';
        else if (key % 3 == 2)
            x = '50%';
        else x = '83.3%';
        gap = 100 / (test.length - 1)*3
        y = (parseInt((key - 1) / 3)) * gap + gap * 0.5
        // console.log(test[0][key - 1], x, "y:", y);
        mySeries.push(
            {
            type: 'pie',
                name: test[0][key - 1],
                radius: ['5%', '20%'],
                roseType: 'radius',
                center: [x, '' + y + '%'],
                label: {
                normal: {
                    formatter: "{a}",
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '22',
                            color: '#000',
                            fontFamily: '楷体'
                        }
                    }
                },
            data: test[key],
            },
            {
                type: 'pie',
                name: test[0][key - 1],
                radius: ['5%', '20%'],
                roseType: 'radius',
                center: [x, '' + y + '%'],
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: '15',
                            color: '#000',
                            fontFamily: '楷体'
                        },
                    }
                },
                labelLine:{
                    normal:{
                        length:4,
                        length2:5
                    }
                },
                data: test[key],
            }
        )
    }
}
let option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    label:{show:true},
    series: mySeries,
    color:['#89b5cb','#c1d0e5','#b6e1d0','#e9bbb2','#95d4dd','#f1c7a7','#c9e3d5']
};
pieChart.setOption(option)
window.addEventListener("resize", function() {
    pieChart.resize();
});

//