//全局变量的定义和初始化视图
//控制全局的模式
let timeIndex=0;//0为”全局“
let beginTime=618;
let endTime=907;
let poetName="";//空字符串为”全选“
// mode0：全部全局模式。
// mode1：未指定诗人，指定时间。
// mode2：未指定时间，指定诗人。
// mode3：指定时间，指定诗人。
let showMode=0;

var timelineYear = ["全局"];//来了老弟
for(i=610;i<907;i+=10)
{
    timelineYear.push(i+"s");
}
timelineYear.push("自定义");

//全局可能会用到的函数
function changeTimeIndex(index){
    timeIndex=index;
    beginTime=convertTimeIndex();
    endTime=beginTime+9;
    changeMode();
}
function timeSetting(){

    let setBeginTime=document.getElementById("timeBegin").value;
    let setEndTime=document.getElementById("timeEnd").value;
    if(setEndTime==''||setBeginTime=='')
    {
        alert("时间不可为空！")
        return
    }
    else if(Number(setBeginTime)>Number(setEndTime))
    {
        alert("起始时间不可晚于结束时间！")
        return
    }
    else if(Number(setEndTime)<618 || Number(setEndTime)>907 || Number(setBeginTime)<618||Number(setBeginTime)>901)
    {
        alert("请填写位于唐朝期间的时间段，唐朝时间：618-907")
        return
    }
    beginTime=Number(setBeginTime);
    endTime=Number(setEndTime);
    timeIndex=31;//时间轴跳转到“自定义”
    timeOption=timeLine.getOption();
    timeOption.timeline[0].data[31]=setBeginTime+'\n~  \n'+setEndTime
    timeOption.timeline[0].currentIndex=31
    timeLine.setOption(timeOption)
    let scl=document.querySelector(".timeAxis")
    scl.scrollTop=scl.scrollHeight;//滑动至底部
    changeMode();
}

function changeMode(){

    //计算模式
    if(timeIndex==0)
    {
        if(poetName=="")
            showMode=0;
        else
            showMode=2;
    }
    else
    {
        if(poetName=="")
            showMode=1;
        else
            showMode=3;
    }
    updateAll();
}
//将单人路径转化为一个全是字符串的数组
function footobj(obj){
    let foots=obj['places'].split(",");
    return foots;
}
//将多人路径转换为字符串数组的数组
function footobj_plus(obj){
    let result=[];
    for(i=0;i<obj.length;i++)
    {
        if(obj[i]!=null) {
            let foots = footobj(obj[i]);
            result.push(foots);
        }
    }
    return result;
}

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        for(var j=0;j<data[i].length;j++)
        {
            var geoCoord = geoCoordMap[data[i][j]];
            if (geoCoord) {
                res.push({
                    name: data[i][j],
                    //字符串拼接
                    //value最终值：[x轴,y轴,value]
                    value: geoCoord.concat(100)
                });
            }
        }

    }

    return res;
};

var convertToLineData = function(data, gps) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        for(var j=0;j<data[i].length;j++){
            var dataItem = data[i][j];
            //出发点
            var fromCoord = geoCoordMap[dataItem];
            if(data[i][j].length==1)
                var toCoord = geoCoordMap[dataItem];//就是原来的
            else
                var toCoord = geoCoordMap[data[i][j+1]]; //下一个

            //  var toCoord = geoGps[Math.random()*3];
            if (fromCoord && toCoord) {
                res.push([{
                    //为什么还要出发地的value，测试了一下好像值不影响图像的任意指标
                    coord: fromCoord,
                }, {
                    coord: toCoord,
                }]);
            }
        }

    }
    return res;
};

//转换timeIndex为具体的时间
var convertTimeIndex=function(){
    if(timeIndex==1)
        return 618;
    else{
        return (timeIndex+60)*10;
    }
}
