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

***


## Card组件

#### Card.js
**props.childern传递Logs模块以及Logs的className**
```
    const Card = (props) => {
        return (
            <div className={`card ${props.className}`}>
                {props.children}
            </div>
        );
    };
```

#### Logs.js
**```<div>变为<Card>```**
```
    return <Card className="logs">
        {
            logItemDate
        }
    </Card>

```

***

## 表单
1. 当表单发生变化，获取用户输入的内容
创建一个响应函数，监听表单变化
```
    const descChangeHandler = (e)=>{
        //事件对象e中保存了当前事件触发时的所有信息
        //event.target执行的是触发事件的对象
        inputDesc = e.target.value;
    }

    <input onChange={descChangeHandler} id="desc" type="text"/>
```

2. 当表单提交时，汇总表单中数据
在react中表单不需要自行提交，而是通过react提交
- 取消表单默认行为——e.preventDefault();
- 创建三个变量(inputDate,inputDesc,inputTime)存储表单中的数据，存储到一个对象当中

```
    const formSubmitHandler = (e)=>{
        //取消表单默认行为
        e.preventDefault();

        const newLog = {
            date: new Date(inputDate),
            desc:inputDesc,
            time:inputTime
        }

        console.log(newLog);
    }
```

3. 提交表单后如何清空表单中的旧数据（现在的表单在react中为非受控组件）
    - 将state设置为表单的value值，当表单项发生变化state会随之改变，反之state变化表单项也跟着变化（双向绑定）==> 表单变为受控组件

4. 当一个数据需要被多个组件使用时，可以将数据放入这些组件共同的**祖先元素**中
- 组件间的通信：
    - 子传父：调用父组件传递的函数，通过函数传递实参传递数据
    - 父传子：props

***

#### portal
弹出层遮罩
1. 在index.html添加一个新元素
2. 修改组件渲染方式
    - 通过**ReactDOM.createPortal()**作为返回值创建元素
    - 参数：jsx（修改前return后代码）、目标位置（DOM元素）

```
    //获取backdrop的根元素
    const backdropRoot = document.getElementById('backdrop-root')

    const BackDrop = (props) => {
        return ReactDOM.createPortal(
            <div className='backDrop'>
                {/* 子元素放到遮罩中，props传递Confirm子组件 */}
                {props.children}
            </div>, backdropRoot
        );
    };
```

***

## create-react-app
```npx create-react-app 项目名```

#### 样式
- 内联样式 & state
```
    const [redBorder, setRedBorder] = useState(true)

    const sy = {color:redBorder?'red':'blue'}

    const colorClick = ()=>{
        setRedBorder(false)
    }

    return (
        <div>
            <p style={sy}>我是一个段落</p>
            <button onClick={colorClick}>click</button>
        </div>
    );
```

- 外部样式表 xxx.css & state
      可能会出现重复样式

- css Module模块（解决了样式重复问题）
    1. 创建xxx.module.css
    2. 在组件引入css
    3. 通过任意名称来设置类
    4. 如 任意名称.p1 来调用样式


## React.Fragment == <></>

<p>专门用来作为父容器组件，只会将内部的子元素直接返回，不会创建多余元素</p>


## Context
方法一：
- 不同组件间共享数据的方式，相当于一个公共的存储空间，可以将多个组件中都需要访问的数据统一存储到一个Context中。
- 通过React.createContext()创建Context
    1. 引入Context
    2. 使用xxx.Consumer组件创建元素 Consumer标签体需要一个回调函数

方法二：(只适用函数组件)
- 通过React.createContext()创建Context
    1. 引入Context
    2. 使用钩子函数useContext()获取到context 需要一个context作为参数

>不能作为state，使组件重新渲染   

#### xxx.Provider
- 表示数据的生产者，使用它指定Context中数据
- 通过value来指定Context中存储的数据
    在该组件的所有子组件中都可以通过Context来访问它所指定的数据
```
        <TestContext.Provider value={{name:'猪八戒',age:12}}>
            <A/>
            <B/>
            {/* <div style={{width:'750rem', height:200, backgroundColor:'#bfa'}}></div> */}
            <Meals mealsData={mealsData} onAdd={addMealHandler} onSub={subMealHandler}/>
        </TestContext.Provider>
```

>当我们通过Context访问数据时，会读取离他最近的Provider中的数据；没有Provider则读取Context中的默认数据。