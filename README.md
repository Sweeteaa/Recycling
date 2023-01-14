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

## React.StrictMode
>避免组件中出现那些会产生副作用的代码

React的**严格模式**，在处于开发模式下，会主动的重复调用一些函数，以使副作用显现。所以在处于开发模式且开启了React严格模式时，这些函数会被调用两次：

1. 类组件的的 constructor, render, 和 shouldComponentUpdate 方法
2. 类组件的静态方法 getDerivedStateFromProps
3. 函数组件的函数体
4. 参数为函数的setState
5. 参数为函数的useState, useMemo, or useReducer5

## setState的执行过程（函数组件）
判断组件当前处于什么阶段
1. 渲染阶段
    不会检查state值是否相同

2. 不是渲染阶段
     - 值不相同，会对组件进行重新渲染
     - 值相同，不会对组件进行重新渲染（在某些情况下会继续执行当前组件的渲染，但是不会触发子组件的渲染，不会产生实际的变化）

## Effect
>useEffect()是一个钩子函数。需要一个函数作为参数。
>默认情况——作为参数的函数将会**在组件渲染完毕后执行**
>可以传递第二个参数（数组），指定useEffect的依赖——只有**依赖发生变化**，effect才会被触发（形成了闭包）
>将effec中使用的所有的局部变量都设置为依赖项，可以确保值发生变化时会触发effect的执行；依赖项为空数组，只会组件初始化时只触发一次
在开发过程中，可以将会产生副作用的代码编写到useEffect()中，避免影响代码的组件渲染

## Reduce
useReduce(reducer,initalArg,init)

const [count, countDispatch] = useReducer(()=>{},1)
参数：
1. reducer：整合函数，对当前state的所有操作都在该函数中定义，该函数返回值会成为state的新值
    reducer在执行时会收到两个参数：1.state 当前最新的state 2.action 需要一个对象来存储dispatch发出的指令，根据action中不同的type来执行不同操作
2. initalArg：state初始值，作用和useState()中的值一样

返回值：
1. 用来获取state的值
2. state修改的派发器，可以发送操作state的命令，具体的修改行为将会由另外一个函数（reducer）执行


## React.memo(组件)
>他接收另一个组件作为参数，并且会返回一个包装过的新组件，包装后的新组建会有缓存功能（只有组件的props发生变化才会触发组件的重新渲染）
对于复杂的组件更有效果

## useCallback()
钩子函数，用来创建react中的回调函数，创建的回调函数**不会**总在组件重新渲染的时候**重新创建**
参数
1. 回调函数 
2. 依赖数组（数组中的变量发生变化回调函数才会重新创建）
```
    const clickHandler = useCallback(()=>{
        ...
    }.[])
```

## fetch————普通写法
>组件初始化时需要向服务器发情请求来加载数据
在effect中加载数据，fetch()用来向服务器发送请求加载数据，是ajax的升级版
需要两个参数：1、请求地址 2、请求信息
```
    useEffect(()=>{
        //成功调用then()
        //失败调用catch()
        setLoading(ture)
        setError(null)
        fetch('地址').then(()=>{
            if(res.ok){
                return res.json()//将响应的json直接转换为js对象
            }
            //代码运行到这证明没有成功加载数据
            setLoading(false)
            //抛出错误
            throw new Error('数据加载失败')
        }).then(data = >{
            //data:数据库数据=>js对象
            console.log(data.data)
            //将加载到的数据设置到state中
            setStuData(data.data)
        })
        .catch((e)=>{
            //catch中回调函数处理错误
            <!-- console.log(e) -->
            setLoading(false)
            //设置错误状态
            setError(e.message2)
        },[])
    })
```

### fetch————await写法
- useEffect中不能调用异步函数
- async变为异步函数，同步写法await返回fetch异步结果
- try...catch..捕获错误
```
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                setLoading(ture)
                setError(null)
                const res = await fetch('地址')
                <!-- console.log(res) -->
                if(res.ok){
                    const data = await res.json()
                    setStuData(data)
                }
                else{
                    throw new Error('数据加载失败')
                }
            }catch(e){
                setError(e)
            }finally{
                setLoading(false)
            }
            
        }
        fetchData()
    },[])
```

## 自定义钩子

React中的钩子函数只能在函数组件或自定义钩子中调用
当我们需要将react中钩子函数提取到一个**公共区域**时，就可以使用**自定义钩子**
>自定义钩子就是一个普通函数，只是名字以use开头
**在类中**定义的箭头函数this永远指向实例对象

```
export default function UseFetch(){
    
}
```