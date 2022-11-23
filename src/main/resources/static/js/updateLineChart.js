
function updateLineChart(){
//           mode0：全部全局模式。
//           mode1：未指定诗人，指定时间。
//           mode2：未指定时间，指定诗人。
//           mode3：指定时间，指定诗人。
    if(showMode==0)
    {   //取消高亮 归位
        lineChart.dispatchAction({
            type: 'showTip',
            seriesIndex:0,  // 显示第几个series
            dataIndex: 0// 显示第几个数据
        })
        document.querySelector(".lineChartBox>div").scrollLeft=0;
        axios('http://1.15.187.186:8807/visualization/count')
            .then(function (response) {
                updateLineChart2(response);
            }).catch(function (err) {
            console.log(err)
        });
    }
    else if(showMode==1)//only指定时间
    {
        if(timeIndex==0 || timeIndex==31) {
            axios('http://1.15.187.186:8807/visualization/count?beginTime=' + beginTime + '&endTime=' + endTime)
                .then(function (response) {
                    updateLineChart2(response);
                }).catch(function (err) {
                console.log(err)
            });
        }
        else{
            axios('http://1.15.187.186:8807/visualization/count')
                .then(function (response) {
                    updateLineChart2(response);
                    updateLineChart3();
                }).catch(function (err) {
                console.log(err)
            });
        }
    }
    else if(showMode==2)
    {
        lineChart.dispatchAction({
            type: 'showTip',
            seriesIndex:0,  // 显示第几个series
            dataIndex: 0// 显示第几个数据
        })
        document.querySelector(".lineChartBox>div").scrollLeft=0;
        axios('http://1.15.187.186:8807/visualization/count?name='+poetName)
            .then(function (response) {
                updateLineChart2(response);
            }).catch(function (err) {
            console.log(err)
        });
    }
    else if(showMode==3)
    {
        if(timeIndex==0 || timeIndex==31) {
            axios('http://1.15.187.186:8807/visualization/count?name='+poetName+'&beginTime=' + beginTime + '&endTime=' + endTime)
                .then(function (response) {
                    updateLineChart2(response);
                }).catch(function (err) {
                console.log(err)
            });
        }
        else{
            axios('http://1.15.187.186:8807/visualization/count?name='+poetName)
                .then(function (response) {
                    updateLineChart2(response);
                    updateLineChart3();
                }).catch(function (err) {
                console.log(err)
            });
        }
    }


}

function updateLineChart2(response){
    let dataX=[];
    let dataY=[];
    for(key in response.data){
        dataX.push(key);
        dataY.push(response.data[key])
    }
    var optionLine = lineChart.getOption();

    optionLine.xAxis[0].data =dataX;
    optionLine.series[0].data=dataY;
    lineChart.setOption(optionLine);
}

function updateLineChart3()//专门为Index在1-30的准备
{
lineChart.dispatchAction({
    type: 'showTip',
    seriesIndex:0,  // 显示第几个series
    dataIndex: timeIndex-1 // 显示第几个数据
})
    let scl=document.querySelector(".lineChartBox>div")
    if(timeIndex<=5)
        x=0;
    else
        x=(timeIndex-5)/30
    scl.scrollLeft=scl.scrollWidth*x;//滑动至对应位置
}