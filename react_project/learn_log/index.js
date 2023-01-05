//src/index.js 是js入口文件
//引入ReactDOM
import ReactDOM from 'react-dom/client'
import App from "./App"
import './index.css'



//获取一个根容器
const root = ReactDOM.createRoot(document.getElementById('root'))

//将app渲染进根容器
root.render(<App/>)