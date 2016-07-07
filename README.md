#### 说明

注意 package.json 文件的相关依赖和命令

1、运行 npm run build 进行打包。
2、如果要启动 webpack dev server 请先打包在启动服务 即先执行 npm run build 再执行 npm run dev
3、注意 webpack dev server的自动刷新是在内存中进行的，并且资源地址为其服务器的根目录，固 index.html中依赖的静态资源要配置为 http://localhost:8080/(默认端口为8080，可以通过 --port 修改)
