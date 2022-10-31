var test = [
    ["梧桐", "月", "蝉", "高楼", "花", "流水"],
    [
        { name: '喜', value: 40 },
        { name: '悲', value: 33 },
        { name: '忧', value: 28 },
        { name: '感慨', value: 22 },
        { name: '迷乱', value: 20 },
        { name: '迷惘', value: 15 },
        { name: '寂寞', value: 12 },
        { name: '思乡', value: 10 },
        { name: '不舍', value: 15 },
        { name: '闲淡', value: 12 },
        { name: '愤怒', value: 10 },
    ],
    [
        { name: '喜', value: 20 },
        { name: '悲', value: 33 },
        { name: '忧', value: 28 },
        { name: '感慨', value: 22 },
        { name: '迷乱', value: 20 },
        { name: '迷惘', value: 15 },
        { name: '寂寞', value: 12 },
        { name: '思乡', value: 10 },
        { name: '不舍', value: 15 },
        { name: '闲淡', value: 12 },
        { name: '愤怒', value: 10 },
    ],
    [
        { name: '喜', value: 40 },
        { name: '悲', value: 33 },
        { name: '忧', value: 28 },
        { name: '感慨', value: 22 },
        { name: '迷乱', value: 20 },
        { name: '迷惘', value: 15 },
        { name: '寂寞', value: 12 },
        { name: '思乡', value: 10 },
        { name: '不舍', value: 15 },
        { name: '闲淡', value: 12 },
        { name: '愤怒', value: 10 },
    ],
    [
        { name: '喜', value: 40 },
        { name: '悲', value: 33 },
        { name: '忧', value: 28 },
        { name: '感慨', value: 22 },
        { name: '迷乱', value: 20 },
        { name: '迷惘', value: 15 },
        { name: '寂寞', value: 12 },
        { name: '思乡', value: 10 },
        { name: '不舍', value: 15 },
        { name: '闲淡', value: 12 },
        { name: '愤怒', value: 10 },
    ],
    [
        { name: '喜', value: 20 },
        { name: '悲', value: 33 },
        { name: '忧', value: 28 },
        { name: '感慨', value: 22 },
        { name: '迷乱', value: 20 },
        { name: '迷惘', value: 15 },
        { name: '寂寞', value: 12 },
        { name: '思乡', value: 10 },
        { name: '不舍', value: 15 },
        { name: '闲淡', value: 12 },
        { name: '愤怒', value: 10 },
    ],
    [
        { name: '喜', value: 40 },
        { name: '悲', value: 33 },
        { name: '忧', value: 28 },
        { name: '感慨', value: 22 },
        { name: '迷乱', value: 20 },
        { name: '迷惘', value: 15 },
        { name: '寂寞', value: 12 },
        { name: '思乡', value: 10 },
        { name: '不舍', value: 15 },
        { name: '闲淡', value: 12 },
        { name: '愤怒', value: 30 },
    ],
]
var mySeries = []
var x, y, gap
for (var key in test) {
    console.log(test[key]);
    if (key != 0) {
        // 一排放三个
        if (key % 3 == 1)
            x = '16.6%';
        else if (key % 3 == 2)
            x = '50%';
        else x = '83.3%';
        gap = parseInt(100 / (test.length - 1))
        y = (parseInt((key - 1) / 3)) * gap + gap * 0.5
        console.log(test[0][key - 1], x, "y:", y);
        mySeries.push({
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
                        fontSize: '18',
                        fontWeight: 'bold',
                        color: '#fff'
                    }
                }
            },
            data: test[key],
        })
    }
}
option = {
    title: {
        text: '树叶图',
        subtext: '意象-情感分析',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: mySeries,
};

var pieChart = echarts.init(document.querySelector('.innerLeaf'))
pieChart.setOption(option)
window.addEventListener("resize", function() {
    pieChart.resize();
});