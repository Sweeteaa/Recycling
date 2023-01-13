import React from 'react';
import Meals from './components/Meals/Meals';
import { useState,useReducer } from 'react'
import CartContext from './store/cart-context';
import FilterMeals from './components/FilterMeals/FilterMeals';
import Cart from './components/Cart/Cart';

// 模拟一组食物数据
const MEALS_DATA = [
    {
        id: '1',
        title: '汉堡包',
        desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
        price: 12,
        img: '/img/meals/1.png'
    },
    {
        id: '2',
        title: '双层吉士汉堡',
        desc: '百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！',
        price: 20,
        img: '/img/meals/2.png'
    },
    {
        id: '3',
        title: '巨无霸',
        desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
        price: 24,
        img: '/img/meals/3.png'
    }, {
        id: '4',
        title: '麦辣鸡腿汉堡',
        desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
        price: 21,
        img: '/img/meals/4.png'
    }, {
        id: '5',
        title: '板烧鸡腿堡',
        desc: '原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！',
        price: 22,
        img: '/img/meals/5.png'
    }, {
        id: '6',
        title: '麦香鸡',
        desc: '清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！',
        price: 14,
        img: '/img/meals/6.png'
    }, {
        id: '7',
        title: '吉士汉堡包',
        desc: '百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！',
        price: 12,
        img: '/img/meals/7.png'
    }
];

const cartReducer = (state, action)=>{
    //复制购物车
    const newCart = {...state}

    switch(action.type){
        default:
            return state;
        case 'ADD':
            //判断购物车中是否有该商品
            if(newCart.items.indexOf(action.meal) === -1){
                newCart.items.push(action.meal)
                action.meal.amount = 1
                console.log(action.meal.amount);
            }else{
                action.meal.amount += 1
                console.log(action.meal.amount);
            }

            newCart.totalAmount += 1
            newCart.totalPrice += action.meal.price
            return newCart;
        case 'REMOVE':
            action.meal.amount -= 1
            //检查商品数目是否为0
            if(action.meal.amount === 0){
                //从购物车移除这个商品
                newCart.items.splice(newCart.items.indexOf(action.meal),1)
            }

            //修改商品总数和总金额
            newCart.totalAmount -= 1
            newCart.totalPrice -= action.meal.price
            return newCart;
        case 'CLEAR':
            newCart.items.forEach(item => delete item.amount)
            newCart.items = []
            newCart.totalAmount = 0
            newCart.totalPrice = 0
            return newCart;
    }
}

const App = () => {

    const [mealsData, setMealsData] = useState(MEALS_DATA)

    // 1.商品总数
    // 2.商品总数
    // 3.商品总价

    // const [cartData, setCartData] = useState({
    //     //购物车
    //     items:[],
    //     //总数
    //     totalAmount:0,
    //     //总金额
    //     totalPrice:0
    // })

    const [cartData, cartDispatch] = useReducer(cartReducer, {
        //购物车
        items:[],
        //总数
        totalAmount:0,
        //总金额
        totalPrice:0
    })

    // 创建一个过滤meals的函数
    const filterHandler =(keyword)=>{
        const newMealsData = MEALS_DATA.filter(item => item.title.indexOf(keyword) !== -1)
        setMealsData(newMealsData)
    }

    // const addItem = (meal)=>{
    //     const newCart = {...cartData}
    //     //判断购物车中是否有该商品
    //     if(newCart.items.indexOf(meal) === -1){
    //         newCart.items.push(meal)
    //         meal.amount = 1
    //     }else{
    //         meal.amount += 1
    //     }

    //     newCart.totalAmount += 1
    //     newCart.totalPrice += meal.price

    //     setCartData(newCart)
    // }

    // const removeItem = (meal)=>{
    //     const newCart = {...cartData}
    //     //减少商品数量
    //     meal.amount -= 1

    //     //检查商品数目是否为0
    //     if(meal.amount === 0){
    //         //从购物车移除这个商品
    //         newCart.items.splice(newCart.items.indexOf(meal),1)
    //     }

    //     //修改商品总数和总金额
    //     newCart.totalAmount -= 1
    //     newCart.totalPrice -= meal.price
    //     setCartData(newCart)
    // }

    // const clearCart = ()=>{
    //     const newCart = {...cartData};
    //     newCart.items.forEach(item => delete item.amount)
    //     newCart.items = []
    //     newCart.totalAmount = 0
    //     newCart.totalPrice = 0
    //     setCartData(newCart)
    // }

    return (
        <>
            {/* context app->counter */}
            <CartContext.Provider value={{...cartData,cartDispatch}}>
                <FilterMeals onFilter={filterHandler}/>
                {/* <div style={{width:'750rem', height:200, backgroundColor:'#bfa'}}></div> */}
                 <Meals mealsData={mealsData}/>  
                 <Cart/>
            </CartContext.Provider>
        </>
    );
};

export default App;