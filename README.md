# webpack打包前端工程化开发多站点(多入口文件)[利用glob自动加载多页面]
### 目录结构说明
- website
    - src                #代码开发目录
        - css            #css目录，按照页面（模块）、通用、第三方三个级别进行组织
            + page
            + common
            + lib
        + img            #图片资源
        - js             #JS脚本，按照page、components进行组织
            + page
            + components
        + view           #HTML模板
    - dist               #webpack编译打包输出目录，无需建立目录可由webpack根据配置自动生成
        + css                
        + js
        + view
    + node_modules       #所使用的nodejs模块
    package.json         #项目配置
    webpack.config.js    #webpack配置
    README.md            #项目说明

### 使用
1. 执行 `webpack` 打包命令完成项目打包[打包到dist文件夹下]
2. 执行 `node server` 启动devServer，打开http://localhost:9090/dist/view/index.html就可以进行正常的页面预览了
