# antdBuild
使用dva脚手架+antd构建项目

1. `npm install dva-cli -g`  安装dva脚手架

2. `dva new antdDemo ` 创建项目应用

3. 进入到antdDemo文件夹，`npm start ` 启动项目

4. 引入antd `npm install antd babel-plugin-import --save`

5. 在 `.webpackrc ` 中加入以下代码使`babel-plugin-import ` 插件生效

   ```
   {
     	"extraBabelPlugins": [
       	["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
     	]
   }
   ```

   