//由于选择名字时不仅要改变后台数据中poetName的值，还要调用一系列更新函数，因此在这个js文件中单独定义
function updatePoetName(name){
    poetName=name;
    changeMode();
    if(name!="") {
        document.querySelector(".currentPoet").innerHTML=name;
        axios('http://localhost:8080/visualization/poet/lifetime?name=' + name)
            .then(function (response) {
                let birth = response.data['birth'];
                let death = response.data['death'];
                document.getElementById("timeBegin").value = birth;
                document.getElementById("timeEnd").value = death;
            }).catch(function (err) {
            console.log(err)
        });
    }
    else
            document.querySelector(".currentPoet").innerHTML="全选";

}