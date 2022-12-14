
function updateMap(){
//           mode0：全部全局模式。
//           mode1：未指定诗人，指定时间。
//           mode2：未指定时间，指定诗人。
//           mode3：指定时间，指定诗人。
    if(showMode==0)
    {
        axios('http://1.15.187.186:8807/visualization/footprint/mode0')
            .then(function (response) {
                if(response.data!="")
                mapData=footobj_plus(response.data);
                else
                    mapData=[];
               updateMap2();

            }).catch(function (err) {
            console.log(err)
        });
    }
    else if(showMode==1)
    {
        axios('http://1.15.187.186:8807/visualization/footprint/mode1?'+'beginTime='+beginTime+'&endTime='+endTime)
            .then(function (response) {
                if(response.data!="")
                    mapData=footobj_plus(response.data);
                else
                    mapData=[];
                updateMap2();

            }).catch(function (err) {
            console.log(err)
        });
    }
    else if(showMode==2)
    {
        axios('http://1.15.187.186:8807/visualization/footprint/mode2?name='+poetName)
            .then(function (response) {
                mapData=[];
                if(response.data!="")
                {data1=footobj(response.data);
                mapData.push(data1);}
                updateMap2();

            }).catch(function (err) {
            console.log(err)
        });
    }
    else if(showMode==3)
    {

        axios('http://1.15.187.186:8807/visualization/footprint/mode3?name='+poetName+'&beginTime='+beginTime+'&endTime='+endTime)
            .then(function (response) {
                mapData=[];
                if(response.data!="")
                {data1=footobj(response.data);
                    mapData.push(data1);}
                updateMap2();

            }).catch(function (err) {
            console.log(err)
        });
    }


}

function updateMap2(){
    var option = myChartmap.getOption();
    option.series[0].data = convertData(mapData);
    option.series[2].data = convertToLineData(mapData);
    if(showMode!=0)//非全局模式时加粗线条图标
    {
        option.series[2].effect.symbolSize = 4;
    }
    else {
        option.series[2].effect.symbolSize = 2;
    }
    myChartmap.setOption(option);
}