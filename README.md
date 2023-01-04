## 手动创建react项目
——public
    index.html
——src
    index.js

命令
1.初始化——npm init -y
2.核心库——npm i react react-dom react-scripts

由npm进行包管理，不能直接网页打卡页面，需要进行webpack打包
执行命令——npx react-scripts build
执行命令生成一个新文件夹——build
实时更新——npx react-scripts start

组件
    ——函数式组件，一个返回jsx的普通函数，组件首字母必须大写
    ——类组件，继承React.Component

rsc——快捷方式