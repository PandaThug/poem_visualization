//更新树叶图的数据调用函数
let getNum=0;//axios请求完成数量
let getSum=0;//axios请求需要完成的总数量
function updateLeaf()
{
    //由于技术限制，必须先发起请求获取前15位的意象，只取这些意象进行树叶图的查询
        if(showMode==0){
                axios('http://localhost:8080/visualization/poem/images')
                    .then(function (response){
                        // if(response.data!="")
                        updateLeaf2(response);
                    }).catch(function (err) {
                    // console.log(err)
                });
        }
            // else if(showMode==1)//未指定诗人，指定时间。
            // {
            //     beginTime=convertTimeIndex();
            //     endTime=beginTime+9;
            //     axios('http://localhost:8080/visualization/poem/'+'beginTime='+beginTime+'&endTime='+endTime)
            //         .then(function (response) {
            //             updateBubbles2(response);
            //         }).catch(function (err) {
            //         console.log(err)
            //     });
        // }
        else if(showMode==2)//未指定时间，指定诗人。
        {
                axios('http://localhost:8080/visualization/poem/images/?name='+poetName)
                    .then(function (response){
                        // if(response.data!="")
                        updateLeaf2(response);
                    }).catch(function (err) {
                    console.log(err)
                });

        }
        // else if(showMode==3)//指定时间，指定诗人。
        // {
        //     beginTime=convertTimeIndex();
        //     endTime=beginTime+9;
        //     axios('http://localhost:8080/visualization/poem/mode3?name='+poetName+'&beginTime='+beginTime+'&endTime='+endTime)
        //         .then(function (response) {
        //             updateBubbles2(response);
        //         }).catch(function (err) {
        //         console.log(err)
        //     });
        // }


}

function updateLeaf2(response){
    let dataTest=[];
    for(key in response.data){
        let obj={};
        obj["name"]=key;
        obj["value"]=response.data[key];

        dataTest.push(obj);
    }
    dataTest.sort((a,b)=>{ return b.value-a.value});
    dataTest=dataTest.slice(1,16);//截取1-(n-1)名

    getNum=0;
    getSum=dataTest.length;
    option = pieChart.getOption();
    if(showMode==0)
    {
        for (let obj of dataTest) {
            console.log(obj);
            let imageName = obj.name;
            axios('http://localhost:8080/visualization/images/poem?images=' + imageName)
                .then(function (response) {
                    // if(response.data!="")
                    getNum++;
                    updateLeaf3(response, imageName, getNum);
                }).catch(function (err) {
                console.log(err)
            });
        }
    }
    else if(showMode==2)
    {
        for (let obj of dataTest) {
            console.log(obj);
            let imageName = obj.name;
            axios('http://localhost:8080/visualization/images/poem?images=' + imageName+"&name="+poetName)
                .then(function (response) {
                    // if(response.data!="")
                    getNum++;
                    updateLeaf3(response, imageName, getNum);
                }).catch(function (err) {
                console.log(err)
            });
        }
    }
}

function updateLeaf3(response,imageName,getNum){

    let dataLeaf=[];
    for(key in response.data){
        let obj={};
        obj["name"]=key;
        obj["value"]=response.data[key];
        dataLeaf.push(obj);
    }
    option.series[getNum-1].name=imageName;
    option.series[getNum-1].data=dataLeaf;
    console.log("第"+getNum+"个意象");
    console.log(imageName);
    console.log(dataLeaf);
    if(getNum==getSum)//获取完毕，push设置
    {
        pieChart.setOption(option);
    }

}