//由于选择名字时不仅要改变后台数据中poetName的值，还要调用一系列更新函数，因此在这个js文件中单独定义
function updatePoetName(name){
    poetName=name;
    //树叶图气泡图需要在时间被指定前进行更新
    showMode=2;
    updateLeaf();
    updateBubbles();
    //map和linechart需要指定时间，为了防止直接调用main.js中的timesetting()导致的所有图更新，在此处单独写一份类似的流程
    axios('http://localhost:8080/visualization/poet/lifetime?name='+name)
        .then(function (response) {
           let birth=response.data['birth'];
           let death=response.data['death'];
            document.getElementById("timeBegin").value=birth;
            document.getElementById("timeEnd").value=death;
            beginTime=Number(birth);
            endTime=Number(death);
            timeIndex=31;//时间轴跳转到“自定义”
            timeOption={
                timeline:{
                    currentIndex:31
                }
            }
            timeLine.setOption(timeOption)
            let scl=document.querySelector(".timeAxis")
            scl.scrollTop=scl.scrollHeight;//滑动至底部
            showMode=3;
            updateMap();
            updateLineChart();
        }).catch(function (err) {
        console.log(err)
    });

}