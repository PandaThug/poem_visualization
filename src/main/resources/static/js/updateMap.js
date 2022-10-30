
function updateMap(){
//           mode0：全部全局模式。
//           mode1：未指定诗人，指定时间。
//           mode2：未指定时间，指定诗人。
//           mode3：指定时间，指定诗人。
    if(showMode==0)
    {
        axios('http://localhost:8080/visualization/footprint/mode0')
            .then(function (response) {
                mapData=footobj_plus(response.data);
               updateMap2();

            }).catch(function (err) {
            console.log(err)
        });
    }
    else if(showMode==1)
    {
        beginTime=convertTimeIndex();
        endTime=beginTime+9;
        axios('http://localhost:8080/visualization/footprint/mode1?'+'beginTime='+beginTime+'&endTime='+endTime)
            .then(function (response) {
                mapData=footobj_plus(response.data);
                updateMap2();

            }).catch(function (err) {
            console.log(err)
        });
    }
    else if(showMode==2)
    {

    }
    else if(showMode==3)
    {

    }


}

function updateMap2(){
    colorn=yearIndex%10;
    var option = myChartmap.getOption();
    option.series[0].data = convertData(mapData);
    option.series[3].data = convertToLineData(mapData);
    myChartmap.setOption(option);
}