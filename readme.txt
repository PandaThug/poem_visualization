├─sql
│      footprint.sql：新建诗人路径表
│      footprint_insert.sql：往诗人路径表中插入数据
│      poem_insert.sql：往诗歌信息表中插入数据
│      poet.sql：新建诗歌信息表
│      
├─src
│  ├─main
│  │  ├─java
│  │  │  └─com
│  │  │      └─example
│  │  │          └─poem_visualization
│  │  │              │  PoemVisualizationApplication.java：SpringBoot项目的启动文件
│  │  │              │  
│  │  │              ├─controller：MVC架构中的Controller层
│  │  │              │      FootprintController.java：提供有关路径的接口
│  │  │              │      HomeController.java：提供路由的接口
│  │  │              │      PoemController.java：提供有关诗歌信息的接口
│  │  │              │      PoetController.java：提供有关诗人信息的接口
│  │  │              │      
│  │  │              ├─dao：MVC架构中的持久层
│  │  │              │      FootprintMapper.java：定义有关路径信息查询的接口
│  │  │              │      PoemMapper.java：定义有关诗歌信息查询的接口
│  │  │              │      PoetLifeMapper.java：定义有关诗人信息查询的接口
│  │  │              │      
│  │  │              ├─entity：实体类包
│  │  │              │      Footprint.java：路径信息类
│  │  │              │      Poem.java：诗歌信息类
│  │  │              │      PoetLife.java：诗人信息类
│  │  │              │      
│  │  │              ├─service：MVC架构中的Service层
│  │  │              │      FootprintService.java：封装有关路径信息的方法
│  │  │              │      PoemService.java：封装有关诗歌信息的方法
│  │  │              │      PoetLifeService.java：封装有关诗人信息的方法
│  │  │              │      
│  │  │              └─utils：自定义工具包
│  │  │                      TimeIntervalUtil.java：自定义的区分时间轴工具类
│  │  │                      
│  │  └─resources
│  │      │  application.properties：项目配置文件
│  │      │  
│  │      ├─mapper
│  │      │      footprint-mapper.xml：实现对应dao层的有关路径信息的接口
│  │      │      poem-mapper.xml：实现对应dao层的有关诗歌信息的接口
│  │      │      poetLife-mapper.xml：实现对应dao层的有关诗人信息的接口
│  │      │      
│  │      ├─static
│  │      │  ├─css
│  │      │  │      style.css
│  │      │  │      
│  │      │  ├─images
│  │      │  │      background.jpg
│  │      │  │      bg.webp
│  │      │  │      border1.png
│  │      │  │      help.png
│  │      │  │      switch.png
│  │      │  │      
│  │      │  └─js
│  │      │          axios.min.js
│  │      │          china.json
│  │      │          echarts.min.js
│  │      │          image_emo.js
│  │      │          initAll.js
│  │      │          jquery.js
│  │      │          leaf.js
│  │      │          lineChart.js
│  │      │          main.js
│  │      │          map.js
│  │      │          timeline.js
│  │      │          updateLeaf.js
│  │      │          updateLineChart.js
│  │      │          updateMap.js
│  │      │          updatePoetName.js
│  │      │          vue.js
│  │      │          
│  │      └─templates
│  │              index.html
│  │              
│  └─test
│      └─java
│          └─com
│              └─example
│                  └─poem_visualization
│                          TestMapper.java：测试文件
│                          TestOthers.java：测试文件
│                          TestService.java：测试文件
        
