
timelineOption={
    timeline: {
        data: timelineYear,
        inverse:true,
        currentIndex:0,
        orient:'vertical',
        axisType: 'category',
        autoPlay: false,
        playInterval: 3000,
        left: '10%',
        right: '10%',
        bottom: '2%',
        width: '70%',
        height:'96%',

        label: {
            normal: {
                textStyle: {
                    color: '#555'
                }
            },
            emphasis: {
                textStyle: {
                    color: '#333',
                    fontWeight: "bolder"

                }
            }
        },
        symbolSize: 10,
        lineStyle: {
            color: '#555'
        },
        checkpointStyle: {
            borderColor: '#777',
            borderWidth: 2
        },
        controlStyle: {
            showPlayBtn: false,
            showNextBtn: false,
            showPrevBtn: false,
            normal: {
                color: '#666',
                borderColor: '#666'
            },
            emphasis: {
                color: '#aaa',
                borderColor: '#aaa'
            }
        },

    },

}
var timeLine = echarts.init(document.querySelector('#timeAxis'));
timeLine.setOption(timelineOption)

document.getElementById("globalBtn").onclick = function(){
    //点击后，map隐藏时间轴移动到全局
    console.log("!");
    changeTimeIndex(0);
    timeOption={
        timeline:{
            currentIndex:0
        }
    }
    timeLine.setOption(timeOption)
    document.querySelector(".timeAxis").scrollTop=0;
    updateMap();
    updateBubbles();
};
timeLine.on('timelineChanged', function (params) {
    // 控制台打印数据的名称
    yearIndex=params.currentIndex;//此为年份索引
    changeTimeIndex(yearIndex);
    updateMap()
    updateBubbles();

});