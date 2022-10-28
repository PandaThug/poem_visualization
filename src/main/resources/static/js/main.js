//使用对象是形如这样的字符串：{name=哈哈, value=3}
function stringtoObj1(str){
    var str2=str.substring(1,str.length-1);
    let obj = {};
    let arr1 = str2.split(', ');
    arr1.forEach(function(item){
        //每一项元素，再根据=号字符 打散成数组
        let kv = item.split('=')
        //每次向对象里面添加 属性和属性值
        obj[kv[0]] = kv[1]
    })
    return obj;
}

////使用对象是形如这样的字符串：{雪=1, 风=2}，注意返回的应该是数组：[{name=雪, value=1},{name=风, value=2}]
function stringtoObj2(str){
    var str2=str.substring(1,str.length-1);
    let obj = {};
    let arr1 = str2.split(', ');
    arr1.forEach(function(item){
        //每一项元素，再根据=号字符 打散成数组
        let kv = item.split('=')
        //每次向对象里面添加 属性和属性值
        obj[kv[0]] = kv[1]
    })
    return obj;
}