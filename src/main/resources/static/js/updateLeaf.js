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
            else if(showMode==1)//未指定诗人，指定时间。
            {

                axios('http://localhost:8080/visualization/poem/images/?beginTime='+beginTime+'&endTime='+endTime)
                    .then(function (response) {
                        updateLeaf2(response);
                    }).catch(function (err) {
                    console.log(err)
                });
        }
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
        else if(showMode==3)//指定时间，指定诗人。
        {

            axios('http://localhost:8080/visualization/poem/images/?name='+poetName+'&beginTime='+beginTime+'&endTime='+endTime)
                .then(function (response) {
                    updateLeaf2(response);
                }).catch(function (err) {
                console.log(err)
            });
        }
}

function updateLeaf2(response){
    console.log(response.data)
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
    let option = pieChart.getOption();
    if(showMode==0)
    {//
        for (let obj of dataTest) {
            let imageName = obj.name;
            axios('http://localhost:8080/visualization/images/poem?images=' + imageName+"&num="+getNum)
                .then(function (response) {
                    updateLeaf3(response, imageName);

                }).catch(function (err) {
                console.log(err)
            });
            getNum+=2;
        }
    }
    else if(showMode==1)//only指定时间
    {
        for (let obj of dataTest) {
            let imageName = obj.name;
            axios('http://localhost:8080/visualization/images/poem?images=' + imageName+"&beginTime="+beginTime+"&endTime="+endTime+"&num="+getNum)
                .then(function (response) {
                    // if(response.data!="")
                    updateLeaf3(response, imageName);

                }).catch(function (err) {
                console.log(err)
            });
            getNum+=2;
        }
    }
    else if(showMode==2)
    {
        for (let obj of dataTest) {
            let imageName = obj.name;
            axios('http://localhost:8080/visualization/images/poem?images=' + imageName+"&name="+poetName+"&num="+getNum)
                .then(function (response) {
                    // if(response.data!="")
                    updateLeaf3(response, imageName);

                }).catch(function (err) {
                console.log(err)
            });
            getNum+=2;
        }
    }
    else if(showMode==3)//全指定
    {
        for (let obj of dataTest) {
            let imageName = obj.name;
            axios('http://localhost:8080/visualization/images/poem?images=' + imageName+"&name="+poetName+"&beginTime="+beginTime+"&endTime="+endTime+"&num="+getNum)
                .then(function (response) {
                    // if(response.data!="")
                    updateLeaf3(response, imageName);

                }).catch(function (err) {
                console.log(err)
            });
            getNum+=2;
        }
    }
}

function updateLeaf3(response,imageName){
    let dataLeaf=[];
    let num=0;
    for(key in response.data){
        let obj={};
        if(key!="num")
        {
            obj["name"] = key;
            obj["value"] = response.data[key];
            dataLeaf.push(obj);
        }
        else
        {
            num=response.data["num"];
        }
    }
    console.log(num);
    option.series[num].name=imageName;
    option.series[num+1].name=imageName;
    option.series[num].data=dataLeaf;
    option.series[num+1].data=dataLeaf;
    console.log("第"+(num+2)/2+"个意象");
    console.log(imageName);
    console.log(dataLeaf);
    if(getNum==num*2-2)//获取完毕，push设置
    {
        pieChart.setOption(option);
    }

}