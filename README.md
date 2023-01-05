# 手动创建react项目
```
    —public
        index.html
    —src
        index.js
        index.css
        App.js
        App.css
```

## 命令
1.初始化——npm init -y
2.核心库——npm i react react-dom react-scripts

由npm进行包管理，不能直接网页打卡页面，需要进行webpack打包
执行命令——npx react-scripts build
执行命令生成一个新文件夹——build
实时更新——npx react-scripts start

***

## 组件
函数式组件—— 一个返回jsx的普通函数，组件首字母必须大写

类组件—— 继承React.Component

rsc——创建快捷方式

#### 传值
props——父组件向子组件传值，只读，不能够修改

Date对象，new Date(年,月（+1）,日，小时，分钟)
获取月份——getMonth()，需要特殊处理toLocaleString('zn-CN',{month:'long'})
toLocaleString(locales,options)
获取日期——getDate()

***

## state
在react中，当组件渲染完毕后，再修改组件中的变量，不会使组件重新渲染
```
    return (
        <div className={'item'}>
            <h1>{counter}</h1>
            <button onClick={lesHandler}>-</button>
            <button onClick={addHandler}>+</button>
        </div>
    );

```
函数执行，return后组件已经渲染完成。lesHandler和addHandler不会对counter产生影响
因此，**要使得counter改变，必须在变量修改后对组件进行重新渲染**
需要一个**特殊变量**，变量被修改后组件会自动渲染

**state相当于一个变量**，这个变量在react中进行了注册
react会监控这个变量的变化，state变化时，会自动触发组件的重新渲染，修改可以在页面中呈现

在函数组件中需要通过**钩子函数**获取state
**useState(初始值)** 创建state，会返回一个数组
数组中第一个元素是初始值，第二个元素是一个函数
```
    const result = useState(1)

    // let counter = result[0];//初始值
    // let setCounter = result[1];//函数
    
    //解构赋值
    const [counter, setCounter] = result;

    const lesHandler = ()=>{
        setCounter(counter-1)
    }

    const addHandler = ()=>{
        setCounter(counter+1)
    }
```
**初始值**只用来显示数据，直接修改不会触发组件的重新渲染
**函数**用来修改state，调用其修改state后会触发组件的重新渲染，并且使用函数中的值作为新的state值

其他情况：

>1️⃣ 当state的值是一个对象时，修改时是使用新的对象去替换已有的对象
>```const newUser = Object.assign({},user)```


>2️⃣ 当通过setState去修改一个state时，并不表示修改当前的state，修改的是组件下一次渲染时的state值
>为了避免这个情况，可以通过setState()传递回调函数形式来修改state
>```setCounter(preCounter => preCounter + 1)```
 
***

 ## 获取原生DOM对象

 1. 使用传统document来对DOM进行操作
 2. 直接从react处获取DOM对象

        - 创建一个存储DOM对象的容器——使用useRef()钩子函数 const ref = useRef()

3. useRef返回的就是一个普通js对象
