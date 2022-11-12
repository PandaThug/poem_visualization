
    var myChartmap=echarts.init(document.querySelector('.mapBox'));
    var uploadedDataURL = "./js/china.json";
    var mapData=[[]];
    var n=15;
    colorScatter='#fbcd4f'
    colorLine='rgba(127,175,185,0.5)'
    //如果想要修改，请点击上方克隆，然后在自己的版本上修改，不要在lz的版本上改！！

    // echarts.extendsMap = function(id, opt) {
//     // 实例


//     var cityMap = {
//         "郑州市": zhengzhou,
//         "开封市": kaifeng,
//         "洛阳市": luoyang,
//         "平顶山市": pingdingshan,
//         "安阳市": anyang,
//         "鹤壁市": hebi,
//         "新乡市": xinxiang,
//         "焦作市": jiaozuo,
//         "濮阳市": puyang,
//         "漯河市": luohe,
//         "三门峡市": sanmenxia,
//         "南阳市": nanyang,
//         "商丘市": shangqiu,
//         "信阳市": xinyang,
//         "周口市": zhoukou,
//         "许昌市": xuchang,
//         "驻马店市": zhumadian
//     };

// }
    var geoGpsMap = {
    '1': [127.9688, 45.368],
    '2': [116.4551, 40.2539],
    '3': [109.1162, 34.2004],
    '4': [113.12244, 23.009505],
    '5': [87.9236, 43.5883],
    '6': [91.11, 29.97],
};
    var geoCoordMap = {
    "天津":[117.4219,39.4189],
    "北京":[116.4551,40.2539],
    "上海":[121.4648,31.2891],
    "重庆":[107.7539,30.1904],
    "六安":[116.3123,31.8329],
    "安庆":[116.7517,30.5255],
    "滁州":[118.1909,32.536],
    "宣城":[118.8062,30.6244],
    "阜阳":[115.7629,32.9919],
    "宿州":[117.5208,33.6841],
    "黄山":[118.0481,29.9542],
    "巢湖":[117.7734,31.4978],
    "亳州":[116.1914,33.4698],
    "池州":[117.3889,30.2014],
    "合肥":[117.29,32.0581],
    "蚌埠":[117.4109,33.1073],
    "芜湖":[118.3557,31.0858],
    "淮北":[116.6968,33.6896],
    "淮南":[116.7847,32.7722],
    "马鞍山":[118.6304,31.5363],
    "铜陵":[117.9382,30.9375],
    "澳门":[113.5715,22.1583],
    "酉阳":[108.8196,28.8666],
    "奉节":[109.3909,30.9265],
    "巫溪":[109.3359,31.4813],
    "开县":[108.4131,31.2561],
    "彭水":[108.2043,29.3994],
    "云阳":[108.8306,31.0089],
    "城口":[108.7756,31.9098],
    "江津":[106.2158,28.9874],
    "石柱":[108.2813,30.1025],
    "巫山":[109.8853,31.1188],
    "丰都":[107.8418,29.9048],
    "武隆":[107.655,29.35],
    "秀山":[109.0173,28.5205],
    "黔江":[108.7207,29.4708],
    "綦江":[106.6553,28.8171],
    "忠县":[107.8967,30.3223],
    "梁平":[107.7429,30.6519],
    "潼南":[105.7764,30.1135],
    "垫江":[107.4573,30.2454],
    "大足":[105.7544,29.6136],
    "铜梁":[106.0291,29.8059],
    "荣昌":[105.5127,29.4708],
    "璧山":[106.2048,29.5807],
    "南平":[118.136,27.2845],
    "三明":[117.5317,26.3013],
    "龙岩":[116.8066,25.2026],
    "宁德":[119.6521,26.9824],
    "福州":[119.4543,25.9222],
    "漳州":[117.5757,24.3732],
    "泉州":[118.3228,25.1147],
    "莆田":[119.0918,25.3455],
    "厦门":[118.1689,24.6478],
    "酒泉":[96.2622,40.4517],
    "张掖":[99.7998,38.7433],
    "甘南":[102.9199,34.6893],
    "武威":[103.0188,38.1061],
    "陇南":[105.304,33.5632],
    "庆阳":[107.5342,36.2],
    "白银":[104.8645,36.5076],
    "定西":[104.5569,35.0848],
    "天水":[105.6445,34.6289],
    "兰州":[103.5901,36.3043],
    "平凉":[107.0728,35.321],
    "临夏":[103.2715,35.5737],
    "金昌":[102.074,38.5126],
    "嘉峪关":[98.1738,39.8035],
    "清远":[112.9175,24.3292],
    "韶关":[113.7964,24.7028],
    "湛江":[110.3577,20.9894],
    "梅州":[116.1255,24.1534],
    "河源":[114.917,23.9722],
    "肇庆":[112.1265,23.5822],
    "惠州":[114.6204,23.1647],
    "茂名":[111.0059,22.0221],
    "江门":[112.6318,22.1484],
    "阳江":[111.8298,22.0715],
    "云浮":[111.7859,22.8516],
    "广州":[113.5107,23.2196],
    "汕尾":[115.5762,23.0438],
    "揭阳":[116.1255,23.313],
    "珠海":[113.7305,22.1155],
    "佛山":[112.8955,23.1097],
    "潮州":[116.7847,23.8293],
    "汕头":[117.1692,23.3405],
    "深圳":[114.5435,22.5439],
    "东莞":[113.8953,22.901],
    "中山":[113.4229,22.478],
    "百色":[106.6003,23.9227],
    "河池":[107.8638,24.5819],
    "桂林":[110.5554,25.318],
    "南宁":[108.479,23.1152],
    "柳州":[109.3799,24.9774],
    "崇左":[107.3364,22.4725],
    "来宾":[109.7095,23.8403],
    "玉林":[110.2148,22.3792],
    "梧州":[110.9949,23.5052],
    "贺州":[111.3135,24.4006],
    "钦州":[109.0283,22.0935],
    "贵港":[109.9402,23.3459],
    "防城港":[108.0505,21.9287],
    "北海":[109.314,21.6211],
    "遵义":[106.908,28.1744],
    "黔东南":[108.4241,26.4166],
    "毕节":[105.1611,27.0648],
    "黔南":[107.2485,25.8398],
    "铜仁":[108.6218,28.0096],
    "黔西南":[105.5347,25.3949],
    "六盘水":[104.7546,26.0925],
    "安顺":[105.9082,25.9882],
    "贵阳":[106.6992,26.7682],
    "儋州":[109.3291,19.5653],
    "文昌":[110.8905,19.7823],
    "乐东":[109.0283,18.6301],
    "三亚":[109.3716,18.3698],
    "琼中":[109.8413,19.0736],
    "东方":[108.8498,19.0414],
    "海口":[110.3893,19.8516],
    "万宁":[110.3137,18.8388],
    "澄迈":[109.9937,19.7314],
    "白沙":[109.3703,19.211],
    "琼海":[110.4208,19.224],
    "昌江":[109.0407,19.2137],
    "临高":[109.6957,19.8063],
    "陵水":[109.9924,18.5415],
    "屯昌":[110.0377,19.362],
    "定安":[110.3384,19.4698],
    "保亭":[109.6284,18.6108],
    "五指山":[109.5282,18.8299],
    "黑河":[127.1448,49.2957],
    "大兴安岭":[124.1016,52.2345],
    "哈尔滨":[127.9688,45.368],
    "齐齐哈尔":[124.541,47.5818],
    "牡丹江":[129.7815,44.7089],
    "绥化":[126.7163,46.8018],
    "伊春":[129.1992,47.9608],
    "佳木斯":[133.0005,47.5763],
    "鸡西":[132.7917,45.7361],
    "双鸭山":[133.5938,46.7523],
    "大庆":[124.7717,46.4282],
    "鹤岗":[130.4407,47.7081],
    "七台河":[131.2756,45.9558],
    "承德":[117.5757,41.4075],
    "张家口":[115.1477,40.8527],
    "保定":[115.0488,39.0948],
    "唐山":[118.4766,39.6826],
    "沧州":[116.8286,38.2104],
    "石家庄":[114.4995,38.1006],
    "邢台":[114.8071,37.2821],
    "邯郸":[114.4775,36.535],
    "秦皇岛":[119.2126,40.0232],
    "衡水":[115.8838,37.7161],
    "廊坊":[116.521,39.0509],
    "南阳":[112.4011,33.0359],
    "信阳":[114.8291,32.0197],
    "洛阳":[112.0605,34.3158],
    "驻马店":[114.1589,32.9041],
    "周口":[114.873,33.6951],
    "商丘":[115.741,34.2828],
    "三门峡":[110.8301,34.3158],
    "新乡":[114.2029,35.3595],
    "平顶山":[112.9724,33.739],
    "郑州":[113.4668,34.6234],
    "安阳":[114.5325,36.0022],
    "开封":[114.5764,34.6124],
    "焦作":[112.8406,35.1508],
    "许昌":[113.6975,34.0466],
    "濮阳":[115.1917,35.799],
    "漯河":[113.8733,33.6951],
    "鹤壁":[114.3787,35.744],
    "恩施":[109.5007,30.2563],
    "十堰":[110.5115,32.3877],
    "宜昌":[111.1707,30.7617],
    "襄樊":[111.9397,31.9263],
    "黄冈":[115.2686,30.6628],
    "荆州":[113.291,30.0092],
    "荆门":[112.6758,30.9979],
    "咸宁":[114.2578,29.6631],
    "随州":[113.4338,31.8768],
    "孝感":[113.9502,31.1188],
    "武汉":[114.3896,30.6628],
    "黄石":[115.0159,29.9213],
    "神农架":[110.4565,31.5802],
    "天门":[113.0273,30.6409],
    "仙桃":[113.3789,30.3003],
    "潜江":[112.7637,30.3607],
    "鄂州":[114.7302,30.4102],
    "怀化":[109.9512,27.4438],
    "永州":[111.709,25.752],
    "邵阳":[110.9619,26.8121],
    "郴州":[113.2361,25.8673],
    "常德":[111.4014,29.2676],
    "湘西":[109.7864,28.6743],
    "衡阳":[112.4121,26.7902],
    "岳阳":[113.2361,29.1357],
    "益阳":[111.731,28.3832],
    "长沙":[113.0823,28.2568],
    "株洲":[113.5327,27.0319],
    "张家界":[110.5115,29.328],
    "娄底":[111.6431,27.7185],
    "湘潭":[112.5439,27.7075],
    "盐城":[120.2234,33.5577],
    "徐州":[117.5208,34.3268],
    "南通":[121.1023,32.1625],
    "淮安":[118.927,33.4039],
    "苏州":[120.6519,31.3989],
    "宿迁":[118.5535,33.7775],
    "连云港":[119.1248,34.552],
    "扬州":[119.4653,32.8162],
    "南京":[118.8062,31.9208],
    "泰州":[120.0586,32.5525],
    "无锡":[120.3442,31.5527],
    "常州":[119.4543,31.5582],
    "镇江":[119.4763,31.9702],
    "赣州":[115.2795,25.8124],
    "吉安":[114.884,26.9659],
    "上饶":[117.8613,28.7292],
    "九江":[115.4224,29.3774],
    "抚州":[116.4441,27.4933],
    "宜春":[115.0159,28.3228],
    "南昌":[116.0046,28.6633],
    "景德镇":[117.334,29.3225],
    "萍乡":[113.9282,27.4823],
    "鹰潭":[117.0813,28.2349],
    "新余":[114.95,27.8174],
    "延边":[129.397,43.2587],
    "吉林":[126.8372,43.6047],
    "白城":[123.0029,45.2637],
    "松原":[124.0906,44.7198],
    "长春":[125.8154,44.2584],
    "白山":[127.2217,42.0941],
    "通化":[125.9583,41.8579],
    "四平":[124.541,43.4894],
    "辽源":[125.343,42.7643],
    "大连":[122.2229,39.4409],
    "朝阳":[120.0696,41.4899],
    "丹东":[124.541,40.4242],
    "铁岭":[124.2773,42.7423],
    "沈阳":[123.1238,42.1216],
    "抚顺":[124.585,41.8579],
    "葫芦岛":[120.1575,40.578],
    "阜新":[122.0032,42.2699],
    "锦州":[121.6626,41.4294],
    "鞍山":[123.0798,40.6055],
    "本溪":[124.1455,41.1987],
    "营口":[122.4316,40.4297],
    "辽阳":[123.4094,41.1383],
    "盘锦":[121.9482,41.0449],
    "呼伦贝尔":[120.8057,50.2185],
    "阿拉善":[102.019,40.1001],
    "锡林郭勒":[115.6421,44.176],
    "鄂尔多斯":[108.9734,39.2487],
    "赤峰":[118.6743,43.2642],
    "巴彦淖尔":[107.5562,41.3196],
    "通辽":[121.4758,43.9673],
    "乌兰察布":[112.5769,41.77],
    "兴安":[121.3879,46.1426],
    "包头":[110.3467,41.4899],
    "呼和浩特":[111.4124,40.4901],
    "乌海":[106.886,39.4739],
    "吴忠":[106.853,37.3755],
    "中卫":[105.4028,36.9525],
    "固原":[106.1389,35.9363],
    "银川":[106.3586,38.1775],
    "石嘴山":[106.4795,39.0015],
    "海西":[94.9768,37.1118],
    "玉树":[93.5925,33.9368],
    "果洛":[99.3823,34.0466],
    "海南":[100.3711,35.9418],
    "海北":[100.3711,37.9138],
    "黄南":[101.5686,35.1178],
    "海东":[102.3706,36.2988],
    "西宁":[101.4038,36.8207],
    "烟台":[120.7397,37.5128],
    "临沂":[118.3118,35.2936],
    "潍坊":[119.0918,36.524],
    "青岛":[120.4651,36.3373],
    "菏泽":[115.6201,35.2057],
    "济宁":[116.8286,35.3375],
    "德州":[116.6858,37.2107],
    "滨州":[117.8174,37.4963],
    "聊城":[115.9167,36.4032],
    "东营":[118.7073,37.5513],
    "济南":[117.1582,36.8701],
    "泰安":[117.0264,36.0516],
    "威海":[121.9482,37.1393],
    "日照":[119.2786,35.5023],
    "淄博":[118.0371,36.6064],
    "枣庄":[117.323,34.8926],
    "莱芜":[117.6526,36.2714],
    "榆林":[109.8743,38.205],
    "延安":[109.1052,36.4252],
    "汉中":[106.886,33.0139],
    "安康":[109.1162,32.7722],
    "商洛":[109.8083,33.761],
    "宝鸡":[107.1826,34.3433],
    "渭南":[109.7864,35.0299],
    "咸阳":[108.4131,34.8706],
    "西安":[109.1162,34.2004],
    "铜川":[109.0393,35.1947],
    "忻州":[112.4561,38.8971],
    "吕梁":[111.3574,37.7325],
    "临汾":[111.4783,36.1615],
    "晋中":[112.7747,37.37],
    "运城":[111.1487,35.2002],
    "大同":[113.7854,39.8035],
    "长治":[112.8625,36.4746],
    "朔州":[113.0713,39.6991],
    "晋城":[112.7856,35.6342],
    "太原":[112.3352,37.9413],
    "阳泉":[113.4778,38.0951],
    "甘孜":[99.9207,31.0803],
    "阿坝":[102.4805,32.4536],
    "凉山":[101.9641,27.6746],
    "绵阳":[104.7327,31.8713],
    "达州":[107.6111,31.333],
    "广元":[105.6885,32.2284],
    "雅安":[102.6672,29.8938],
    "宜宾":[104.6558,28.548],
    "乐山":[103.5791,29.1742],
    "南充":[106.2048,31.1517],
    "巴中":[107.0618,31.9977],
    "泸州":[105.4578,28.493],
    "成都":[103.9526,30.7617],
    "资阳":[104.9744,30.1575],
    "攀枝花":[101.6895,26.7133],
    "眉山":[103.8098,30.0146],
    "广安":[106.6333,30.4376],
    "德阳":[104.48,31.1133],
    "内江":[104.8535,29.6136],
    "遂宁":[105.5347,30.6683],
    "自贡":[104.6667,29.2786],
    "台湾":[121.0295,23.6082],
    "香港":[114.2784,22.3057],
    "巴音郭楞":[88.1653,39.6002],
    "和田":[81.167,36.9855],
    "哈密":[93.7793,42.9236],
    "阿克苏":[82.9797,41.0229],
    "阿勒泰":[88.2971,47.0929],
    "喀什":[77.168,37.8534],
    "塔城":[86.6272,45.8514],
    "昌吉":[89.6814,44.4507],
    "克孜勒苏":[74.6301,39.5233],
    "吐鲁番":[89.6375,42.4127],
    "伊犁":[82.5513,43.5498],
    "博尔塔拉":[81.8481,44.6979],
    "乌鲁木齐":[87.9236,43.5883],
    "克拉玛依":[85.2869,45.5054],
    "阿拉尔":[81.2769,40.6549],
    "图木舒克":[79.1345,39.8749],
    "五家渠":[87.5391,44.3024],
    "石河子":[86.0229,44.2914],
    "那曲":[88.1982,33.3215],
    "阿里":[82.3645,32.7667],
    "日喀则":[86.2427,29.5093],
    "林芝":[95.4602,29.1138],
    "昌都":[97.0203,30.7068],
    "山南":[92.2083,28.3392],
    "拉萨":[91.1865,30.1465],
    "普洱":[100.7446,23.4229],
    "红河":[103.0408,23.6041],
    "文山":[104.8865,23.5712],
    "曲靖市":[103.9417,25.7025],
    "楚雄":[101.6016,25.3619],
    "大理":[99.9536,25.6805],
    "临沧":[99.613,24.0546],
    "迪庆":[99.4592,27.9327],
    "昭通":[104.0955,27.6031],
    "昆明":[102.9199,25.4663],
    "丽江":[100.448,26.955],
    "西双版纳":[100.8984,21.8628],
    "保山":[99.0637,24.9884],
    "玉溪":[101.9312,23.8898],
    "怒江":[99.1516,26.5594],
    "德宏":[98.1299,24.5874],
    "丽水":[119.5642,28.1854],
    "杭州":[119.5313,29.8773],
    "温州":[120.498,27.8119],
    "宁波":[121.5967,29.6466],
    "舟山":[122.2559,30.2234],
    "台州":[121.1353,28.6688],
    "金华":[120.0037,29.1028],
    "衢州":[118.6853,28.8666],
    "绍兴":[120.564,29.7565],
    "嘉兴":[120.9155,30.6354],
    "湖州":[119.8608,30.7782],
    "招远":[120.38,37.35],
    "乳山":[121.52,36.89],
    "莱西":[120.53,36.86],
    "胶南":[119.97,35.88],
    "诸暨":[120.23,29.71],
    "富阳":[119.95,30.07],
    "临安":[119.72,30.23],
    "库尔勒":[86.06,41.68],
    "溧阳":[119.48,31.43],
    "句容":[119.16,31.95],
    "金坛":[119.56,31.74],
    "宜兴":[119.82,31.36],
    "胶州":[120.03336,36.264622],
    "平度":[119.97,36.77],
    "江阴":[120.26,31.91],
    "蓬莱":[120.75,37.8],
    "文登":[122.05,37.2],
    "瓦房店":[121.979603,39.627114],
    "寿光":[118.73,36.86],
    "慈溪":[30.18,121.27],
    "庄河市":[122.970612,39.69829],
    "东港市" : [124.149437,39.883467],
    "德惠市" : [125.703327,44.533909],
    "延吉市" : [129.51579,42.906964],
    "尚志市" : [127.968539,45.214953],
    "金坛区" : [119.573395,31.744399],
    "启东市" : [121.659724,31.810158],
    "海门市" : [121.176609,31.893528],
    "大丰区" : [120.470324,33.199531],
    "扬中市" : [119.828054,32.237266],
    "新源县" : [83.258493,43.434249],
    "扶绥县" : [107.911533,22.635821],
    "磁县" : [114.38208,36.367673],
    "阳城县" : [112.422014,35.482177],
    "南岗区" : [126.652098,45.755971],
    "海安县" : [120.465995,32.540289],
    "东海县" : [118.766489,34.522859],
    "灌云县" : [119.255741,34.298436],
    "淮阴区" : [119.020817,33.622452],
    "盱眙县" : [118.493823,33.00439],
    "金湖县" : [119.016936,33.018162],
    "建湖县" : [119.793105,33.472621],
    "射阳县" : [120.257444,33.773779],
    "嘉善县" : [120.921871,30.841352],
    "仙居县" : [120.735074,28.849213],
    "肥西县" : [117.166118,31.719646],
    "章贡区" : [114.93872,25.851367],
    "临朐县" : [118.539876,36.516371],
    "汶上县" : [116.487146,35.721746],
    "西平县" : [114.026864,33.382315],
    "云梦县" : [113.750616,31.021691],
    "衡东县" : [112.950412,27.083531],
    "九龙坡区" : [106.480989,29.523492],
    "景泰县" : [104.066394,37.193519],
    "自流井区" : [104.778188,29.343231],
    "盐亭县" : [105.391991,31.22318],
    "凉州区" : [102.634492,37.93025],
    "青羊区" : [104.055731,30.667648],
    "泰兴区" : [120.020228,32.168784],
    "海宁市" : [120.688821,30.525544],
    "长乐市" : [119.510849,25.960583],
    "肥城市" : [116.763703,36.1856],
    "偃师市" : [112.787739,34.723042],
    "林州市" : [113.823767,36.063403],
    "四会市" : [112.695028,23.340324],
    "阿克苏地区": [80.260604, 41.168779],
    "和田地区": [79.922211, 37.114157],
    "上海": [121.480237, 31.236305],
    "东莞": [113.758231, 23.026997],
    "东营": [118.588614, 37.454925],
    "中山": [113.399023, 22.522262],
    "临汾": [111.526153, 36.094052],
    "临沂": [118.36299, 35.110531],
    "丹东": [124.362564, 40.00569],
    "丽水": [119.929503, 28.472979],
    "乌鲁木齐": [87.623314, 43.832806],
    "佛山": [113.128432, 23.027707],
    "保定": [115.471052, 38.880055],
    "兰州": [103.840692, 36.067312],
    "包头": [109.846755, 40.663636],
    "北京": [116.413554, 39.911013],
    "北海": [109.126614, 21.486955],
    "南京": [118.802891, 32.064735],
    "南宁": [108.373351, 22.823037],
    "南昌": [115.864528, 28.687675],
    "南通": [120.900301, 31.985237],
    "厦门": [118.095915, 24.485821],
    "台州": [121.426996, 28.662297],
    "合肥": [117.235447, 31.82687],
    "呼和浩特": [111.758518, 40.847461],
    "咸阳": [108.715712, 34.335599],
    "哈尔滨": [126.542417, 45.807782],
    "唐山": [118.187036, 39.636673],
    "嘉兴": [120.762045, 30.750912],
    "大同": [113.306446, 40.082539],
    "大连": [121.621391, 38.919345],
    "天津": [117.205914, 39.090908],
    "太原": [112.55706, 37.876885],
    "威海": [122.128245, 37.519322],
    "宁波": [121.556686, 29.880177],
    "宝鸡": [107.243899, 34.367747],
    "宿迁": [118.282062, 33.967686],
    "常州": [119.980142, 31.816791],
    "广州": [113.270793, 23.135308],
    "廊坊": [116.69034, 39.54352],
    "延安": [109.496361, 36.591003],
    "张家口": [114.894165, 40.830172],
    "徐州": [117.29235, 34.210143],
    "德州": [116.365825, 37.441313],
    "惠州": [114.423348, 23.116409],
    "成都": [104.071216, 30.576279],
    "扬州": [119.419107, 32.39986],
    "承德": [117.969798, 40.957855],
    "拉萨": [91.121025, 29.650088],
    "无锡": [120.318954, 31.496704],
    "日照": [119.533606, 35.422798],
    "昆明": [102.839667, 24.885953],
    "杭州": [120.161693, 30.280059],
    "枣庄": [117.328513, 34.816569],
    "柳州": [109.42198, 24.331519],
    "株洲": [113.140431, 27.833737],
    "武汉": [114.311831, 30.598428],
    "汕头": [116.688739, 23.359289],
    "江门": [113.088165, 22.584459],
    "沈阳": [123.438973, 41.811339],
    "沧州": [116.845272, 38.31022],
    "河源": [114.707097, 23.749829],
    "泉州": [118.682316, 24.880242],
    "泰安": [117.094893, 36.205905],
    "泰州": [119.932115, 32.4612],
    "济南": [117.001319, 36.671627],
    "济宁": [116.593852, 35.420269],
    "海口": [110.206424, 20.050057],
    "淄博": [118.061254, 36.819182],
    "淮安": [119.022429, 33.616272],
    "深圳": [114.066112, 22.548515],
    "清远": [113.062619, 23.688238],
    "温州": [120.705869, 28.001095],
    "渭南": [109.516739, 34.505687],
    "湖州": [120.094566, 30.899015],
    "湘潭": [112.950575, 27.83585],
    "滨州": [117.9792, 37.388387],
    "潍坊": [119.168138, 36.713212],
    "烟台": [121.454425, 37.469868],
    "玉溪": [102.5537, 24.357512],
    "珠海": [113.583235, 22.276392],
    "盐城": [120.168187, 33.355301],
    "盘锦": [122.077269, 41.125939],
    "石家庄": [114.520828, 38.048684],
    "福州": [119.302938, 26.080447],
    "秦皇岛": [119.606184, 39.941259],
    "绍兴": [120.586673, 30.036519],
    "聊城": [115.992077, 36.462681],
    "肇庆": [112.47177, 23.052984],
    "舟山": [122.214339, 29.991092],
    "苏州": [120.589613, 31.304566],
    "莱芜": [117.683221, 36.219357],
    "菏泽": [115.487696, 35.239435],
    "营口": [122.241475, 40.672565],
    "葫芦岛": [120.843388, 40.717364],
    "衡水": [115.676942, 37.745166],
    "衢州": [118.880768, 28.941661],
    "西宁": [101.784269, 36.623477],
    "西安": [108.946306, 34.347436],
    "贵阳": [106.636816, 26.652747],
    "连云港": [119.229571, 34.602342],
    "邢台": [114.510889, 37.076646],
    "邯郸": [114.545808, 36.631222],
    "郑州": [113.631349, 34.753488],
    "鄂尔多斯": [109.787314, 39.61463],
    "重庆": [106.557165, 29.570997],
    "金华": [119.654027, 29.084455],
    "铜川": [108.951558, 34.902957],
    "银川": [106.238976, 38.492392],
    "镇江": [119.431494, 32.195688],
    "长春": [125.33017, 43.82178],
    "长沙": [112.945333, 28.233971],
    "长治": [113.123046, 36.201585],
    "阳泉": [113.587087, 37.86234],
    "青岛": [120.389445, 36.072358],
    "韶关": [113.603757, 24.816174],
    "九江": [116.007993, 29.711328],
    "大庆": [125.109727, 46.593216],
    "宁德": [119.554701, 26.671748],
    "忻州": [112.740804, 38.422382],
    "石嘴山": [106.39078, 38.989783],
    "池州": [117.497839, 30.67098],
    "淮南": [117.006189, 32.631837],
    "吐鲁番地区": [89.196029, 42.957303],
    "宜昌": [111.292971, 30.697602],
    "景德镇": [117.184967, 29.274337],
    "安庆": [117.070127, 30.548594],
    "怒江傈僳族自治州": [98.863189, 25.823736],
    "白城": [122.845302, 45.6254],
    "萍乡": [113.86077, 27.62897],
    "抚州": [116.364627, 27.953603],
    "朝阳": [120.457301, 41.579487],
    "海东": [102.003965, 36.406412],
    "湘西土家族苗族自治州": [109.745507, 28.317399],
    "鹰潭": [117.075765, 28.265879],
    "阿拉善盟": [105.735357, 38.857806],
    "鹤岗": [130.304284, 47.356043],
    "吴忠": [106.205161, 38.003863],
    "石河子": [86.085507, 44.312423],
    "开封": [114.313904, 34.802941],
    "延边朝鲜族自治州": [129.515602, 42.897211],
    "白银": [104.144182, 36.550821],
    "吕梁": [111.148086, 37.525476],
    "随州": [113.389071, 31.696341],
    "雅安": [103.04636, 30.021277],
    "平顶山": [113.198935, 33.772051],
    "阜新": [121.676518, 42.027983],
    "普洱": [100.98114, 22.788486],
    "三亚": [109.518646, 18.258217],
    "赣州": [114.94126, 25.837179],
    "广元": [105.849993, 32.441808],
    "锦州": [121.133631, 41.100869],
    "南充": [106.117231, 30.843297],
    "衡阳": [112.578397, 26.899517],
    "齐齐哈尔": [123.924531, 47.360087],
    "兴安盟": [122.044544, 46.088444],
    "乌海": [106.80185, 39.660154],
    "楚雄彝族自治州": [101.534082, 25.051226],
    "伊春": [128.84704, 47.733329],
    "陇南": [104.928233, 33.406825],
    "荆门": [112.205843, 31.041792],
    "辽源": [125.150107, 42.8943],
    "怀化": [110.008116, 27.575595],
    "牡丹江": [129.638976, 44.558647],
    "黄南藏族自治州": [102.021495, 35.526125],
    "湛江": [110.365494, 21.277163],
    "天水": [105.731276, 34.587162],
    "黔东南苗族侗族自治州": [107.990602, 26.589858],
    "云浮": [112.051045, 22.921154],
    "安康": [109.03592, 32.690575],
    "日喀则地区": [88.956063, 29.26816],
    "海北藏族自治州": [100.907395, 36.960702],
    "海西蒙古族藏族自治州": [97.377823, 37.382839],
    "吉安": [115.00027, 27.119751],
    "黄石": [115.045433, 30.205336],
    "宿州": [116.970454, 33.652034],
    "茂名": [110.931773, 21.669051],
    "阳江": [111.989051, 21.864421],
    "信阳": [114.099264, 32.153186],
    "三门峡": [111.206832, 34.778442],
    "咸宁": [114.328967, 29.847123],
    "许昌": [113.858804, 34.041737],
    "保山": [99.168373, 25.117882],
    "鹤壁": [114.304044, 35.752656],
    "运城": [111.013379, 35.032587],
    "达州": [107.474504, 31.214347],
    "常德": [111.704994, 29.037723],
    "酒泉": [98.500427, 39.738615],
    "马鞍山": [118.512691, 31.67633],
    "南阳": [112.535009, 32.996701],
    "邵阳": [111.474133, 27.245167],
    "黔南布依族苗族自治州": [107.528663, 26.260586],
    "孝感": [113.922962, 30.930712],
    "安顺": [105.952622, 26.259904],
    "辽阳": [123.243726, 41.274452],
    "黔西南布依族苗族自治州": [104.910858, 25.095974],
    "克拉玛依": [84.89587, 45.585765],
    "庆阳": [107.649305, 35.716096],
    "呼伦贝尔": [119.77221, 49.217977],
    "六盘水": [104.836786, 26.599086],
    "新余": [114.923664, 27.823541],
    "七台河": [131.009618, 45.776512],
    "商丘": [115.662798, 34.420378],
    "漯河": [114.02323, 33.587703],
    "乌兰察布": [113.140223, 40.999972],
    "潜江": [112.905773, 30.407633],
    "定西": [104.631662, 35.587354],
    "鸡西": [130.976161, 45.300906],
    "汕尾": [115.381693, 22.791322],
    "四平": [124.356844, 43.172447],
    "西双版纳傣族自治州": [100.803836, 22.013792],
    "遂宁": [105.599152, 30.539156],
    "商洛": [109.94688, 33.876525],
    "海南藏族自治州": [100.626831, 36.292132],
    "文山壮族苗族自治州": [104.221606, 23.404187],
    "六安": [116.529651, 31.741226],
    "张家界": [110.484925, 29.122477],
    "潮州": [116.62943, 23.662923],
    "蚌埠": [117.395835, 32.921498],
    "桂林": [110.296442, 25.279893],
    "甘南藏族自治州": [102.917605, 34.98901],
    "驻马店": [114.029465, 33.017546],
    "林芝地区": [94.368109, 29.654792],
    "百色": [106.624969, 23.907845],
    "鞍山": [123.000974, 41.114122],
    "郴州": [113.021311, 25.776711],
    "巴中": [106.753912, 31.872851],
    "恩施土家族苗族自治州": [109.494763, 30.277908],
    "十堰": [110.80454, 32.635042],
    "临沧": [100.10566, 23.914336],
    "泸州": [105.449092, 28.877577],
    "平凉": [106.671741, 35.549266],
    "宣城": [118.765196, 30.946576],
    "绵阳": [104.686164, 31.473364],
    "佳木斯": [130.32696, 46.806581],
    "遵义": [106.933658, 27.731749],
    "钦州": [108.66089, 21.985392],
    "玉树藏族自治州": [97.01308, 33.011061],
    "本溪": [123.773468, 41.299847],
    "朔州": [112.438184, 39.33789],
    "毕节": [105.333323, 27.408562],
    "张掖": [100.456221, 38.932187],
    "南平": [118.1843, 26.647662],
    "濮阳": [115.035917, 35.767586],
    "宜宾": [104.648103, 28.75761],
    "铜仁": [109.168558, 27.674903],
    "松原": [124.831633, 45.147201],
    "漳州": [117.653827, 24.519197],
    "梧州": [111.285647, 23.482873],
    "洛阳": [112.460033, 34.624376],
    "龙岩": [117.023668, 25.081257],
    "莆田": [119.014232, 25.45996],
    "济源": [112.609314, 35.072867],
    "哈密地区": [93.522785, 42.824642],
    "昭通": [103.723311, 27.344057],
    "大理白族自治州": [100.274223, 25.612206],
    "昌吉回族自治州": [87.314822, 44.016923],
    "迪庆藏族自治州": [99.70948, 27.825264],
    "黑河": [127.535014, 50.251193],
    "吉林": [126.556073, 43.843512],
    "广安": [106.639772, 30.461708],
    "黄山": [118.174807, 30.133213],
    "德阳": [104.404319, 31.133105],
    "河池": [108.091898, 24.698828],
    "益阳": [112.361677, 28.559818],
    "通化": [125.946506, 41.733906],
    "永州": [111.618703, 26.426612],
    "周口": [114.703433, 33.631958],
    "梅州": [116.129179, 24.294311],
    "锡林郭勒盟": [116.054141, 43.939525],
    "固原": [106.24917, 36.021609],
    "滁州": [118.323252, 32.308165],
    "荆州": [112.24722, 30.340606],
    "芜湖": [118.439561, 31.358798],
    "襄阳": [112.250093, 32.229169],
    "榆林": [109.741195, 38.290886],
    "果洛藏族自治州": [100.251341, 34.477207],
    "玉林": [110.18743, 22.660656],
    "临夏回族自治州": [103.217303, 35.607475],
    "鄂州": [114.901557, 30.396522],
    "晋中": [112.759375, 37.692757],
    "巴音郭楞蒙古自治州": [86.151584, 41.770226],
    "澳门": [113.549403, 22.192961],
    "内江": [105.065028, 29.585836],
    "揭阳": [116.37922, 23.555773],
    "通辽": [122.251207, 43.658363],
    "阜阳": [115.821389, 32.895879],
    "中卫": [105.203332, 37.506058],
    "铜陵": [117.818795, 30.950899],
    "红河哈尼族彝族自治州": [103.38215, 23.369914],
    "曲靖": [103.802685, 25.496328],
    "香港": [114.171994, 22.281089],
    "汉中": [107.030197, 33.07382],
    "乐山": [103.77193, 29.558141],
    "新乡": [113.933349, 35.308973],
    "晋城": [112.857706, 35.496081],
    "巴彦淖尔": [107.394129, 40.749427],
    "武威": [102.644524, 37.934078],
    "岳阳": [113.135679, 29.363262],
    "赤峰": [118.895463, 42.264586],
    "白山": [126.431052, 41.94643],
    "攀枝花": [101.725262, 26.588109],
    "黄冈": [114.878872, 30.459422],
    "绥化": [126.975678, 46.658789],
    "双鸭山": [131.165442, 46.652966],
    "凉山彝族自治州": [102.273965, 27.887685],
    "伊犁哈萨克自治州": [81.330697, 43.922815],
    "德宏傣族景颇族自治州": [98.591419, 24.438031],
    "安阳": [114.3996, 36.103649],
    "三明": [117.645742, 26.269683],
    "宜春": [114.422683, 27.820089],
    "上饶": [117.950028, 28.460864],
    "自贡": [104.784891, 29.345379],
    "娄底": [112.001082, 27.703196],
    "丽江": [100.23357, 26.862521],
    "防城港": [108.361138, 21.693439],
    "淮北": [116.804878, 33.96064],
    "儋州": [109.587145, 19.527081],
    "怒江州": [98.863189, 25.823736],
    "焦作": [113.248557, 35.221493],
    "铁岭": [123.848797, 42.292573],
    "抚顺": [123.963595, 41.886078],
    "巢湖": [117.88049, 31.608733],
    "西双版纳": [100.803836, 22.013792],
    "德宏州": [98.591419, 24.438031],
    "恩施": [109.485727, 30.30089],
    "湘西州": [109.745507, 28.317399],
    "西昌": [102.269526, 27.900601],
    "阿坝州": [102.231186, 31.905609],
    "黔南州": [107.528663, 26.260586],
    "黔东南州": [107.990602, 26.589858],
    "黔西南州": [104.910858, 25.095974],
    "大理州": [100.274223, 25.612206],
    "红河州": [103.38215, 23.369914],
    "文山州": [104.221606, 23.404187],
    "楚雄州": [101.534082, 25.051226],
    "迪庆州": [99.70948, 27.825264],
    "山南地区": [91.779601, 29.24309],
    "那曲地区": [92.0578, 31.482375],
    "博尔塔拉蒙古自治州": [82.073064, 44.912168],
    "临夏州": [103.217303, 35.607475],
    "甘南州": [102.917605, 34.98901],
    "格尔木": [94.909745, 36.408588],
    "奎屯": [84.90832, 44.432645],
    "亳州": [115.7786, 33.8445],
    "崇左": [107.3647, 22.3765],
    "定安县": [110.3588, 19.6814],
    "东方": [108.6518, 19.0953],
    "贵港": [109.5989, 23.1115],
    "贺州": [111.5666, 24.4035],
    "嘉峪关": [98.2891, 39.7731],
    "金昌": [102.1880, 38.5200],
    "来宾": [109.2214, 23.7503],
    "乐东黎族自治县": [109.1730, 18.7502],
    "陵水黎族自治县": [110.0375, 18.5060],
    "眉山": [103.8485, 30.0754],
    "琼海": [110.4921, 19.2396],
    "台湾": [120.9605, 23.6978],
    "天门": [113.3169, 30.8657],
    "屯昌县": [110.1034, 19.3517],
    "万宁": [110.3816, 18.8078],
    "文昌": [113.8259, 25.8228],
    "五指山": [109.5169, 18.7751],
    "仙桃": [113.4234, 30.3608],
    "资阳": [104.6520, 30.1246],
    "安徽": [117.17, 31.52],
    "福建": [119.18, 26.05],
    "甘肃": [103.51, 36.04],
    "广东": [113.14, 23.08],
    "广西": [108.19, 22.48],
    "贵州": [106.42, 26.35],
    "海南": [110.20, 20.02],
    "河北": [114.30, 38.02],
    "河南": [113.40, 34.46],
    "黑龙江": [126.36, 45.44],
    "湖北": [114.17, 30.35],
    "湖南": [112.59, 28.12],
    "江苏": [118.46, 32.03],
    "江西": [115.55, 28.40],
    "辽宁": [123.25, 41.48],
    "内蒙古": [111.41, 40.48],
    "宁夏": [106.16, 38.27],
    "青海": [101.48, 36.38],
    "山东": [117.00, 36.40],
    "山西": [112.33, 37.54],
    "陕西": [108.57, 34.17],
    "四川": [104.04, 30.40],
    "西藏": [91.08, 29.39],
    "新疆": [87.36, 43.45],
    "云南": [102.42, 25.04],
    "浙江": [120.10, 30.16],
};

    var colors = [
    ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42","#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA","#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
    ];
    var colorIndex = 0;
    //配置函数
    $(function() {


    //mapdata包括每个地方的年份、名称和数值
    //[总十年数][诗人id]{points:[所有所到的地点，若未移动过也至少有两个一样的地点],value:该十年间诗作数}控制大小的value应该使用固定值。

    /*柱子Y名称*/
    var categoryData = [];

    //bardata[i][j]，i为年份的数量，j为地区数，bardata中只有数据，名称应该是顺序上一一对应的

    $.getJSON(uploadedDataURL, function(geoJson) {

    echarts.registerMap('china', geoJson);
    //converdata是数据的处理，用于点的效果处理
    //res结果{name: "台湾"，value:[121.5135, 25.0308, 100]}


    optionXyMap01 = {
     tooltip: {
            trigger: 'none', // hover触发器
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                shadowStyle: {
                    color: 'rgba(150,150,150,0.1)' //hover颜色
                }
            }
        },
     geo: {
            show: true,
            map: 'china',
            roam: true,
            zoom: 1.15,
            center: [110.83531246, 36.0267395887],//经度越高图越往左，纬度越高图越往下
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#68ae9c',
                    borderWidth: 1,
                    areaColor: '#f2f3e8',
                    //地图的阴影颜色
                    shadowColor: '#9fcfce',
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                },
                emphasis: {
                    areaColor: '#b2d7d3',
                    borderWidth: 1
                }
            }
        },

                title: [{
            /* text: '地图',
             subtext: '内部数据请勿外传',
             left: 'center',
             textStyle: {
                 color: '#fff'
             }*/
        },

        ],
     xAxis: {
            axisLine: {
                show: false,
            },
        },
      yAxis: {
                axisLine: {
                    show: false,
                },

            },
     series: [
                //未知作用
                {
                    //点的原始
                    //文字和标志
                    name: 'light',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    symbolSize: 7,
                    data: convertData(mapData),
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {

                            show: true

                        }
                    },
                    itemStyle: {
                        normal: {
                            color: colorScatter
                        }
                    }
                },
                //地图？
                {
                    type: 'map',
                    map: 'china',
                    geoIndex: 0,
                    aspectScale: 0.75, //长宽比
                    showLegendSymbol: false, // 存在legend时显示
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#031525',
                            borderColor: '#FFFFFF',
                        },
                        emphasis: {
                            areaColor: '#2B91B7'
                        }
                    },
                    animation: false,
                },
                //地图点的动画效果
                {
                    //  name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    //原作用是取前20个点做扩散效果

                    //slice截取数组部分
                    symbolSize: 10,
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis:{
                            show:true,
                            formatter: '{b}',
                            position: 'right',
                         }
                    },
                    itemStyle: {
                        normal: {
                            color:colorScatter,
                            shadowBlur: 10,
                            shadowColor:colorScatter
                        }
                    },
                    zlevel: 2
                },
                //地图线的动画效果
                {
                    type: 'lines',
                    zlevel: 1,
                    effect: {
                        show: true,
                        period: 4, //箭头指向速度，值越小速度越快
                        trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                        symbol: 'arrow', //箭头图标
                        symbolSize: 2, //图标大小
                    },
                    lineStyle: {
                        normal: {
                            color:colorLine,
                            width: 0.1, //尾迹线条宽度
                            opacity: 0.5, //尾迹线条透明度
                            curveness: .3 //尾迹线条曲直度
                        }
                    },
                    //这里是随机数呀
                    data: convertToLineData(mapData)
                },
                //柱状图

            ]

};
    //year就是存储年份字
    myChartmap.setOption(optionXyMap01);

});
});


    function randomNum(minNum, maxNum) {
    switch (arguments.length) {
    case 1:
    return parseInt(Math.random() * minNum + 1, 10);
    break;
    case 2:
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
    break;
    default:
    return 0;
    break;
}
}
