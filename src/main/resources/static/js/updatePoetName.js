//由于选择名字时不仅要改变后台数据中poetName的值，还要调用一系列更新函数，因此在这个js文件中单独定义
function updatePoetName(name){
    changePoetName(name);
    updateAll();
}