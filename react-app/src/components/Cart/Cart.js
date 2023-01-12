import React, { useContext, useEffect, useState } from 'react';
import classes from './Cart.module.css'
import iconImg from '../../asset/bag.png'
import CartContext from "../../store/cart-context"
import CartDetails from './CartDetails/CartDetails';
import Checkout from './Checkout/Checkout';

// 购买条

const Cart = () => {

    const ctx = useContext(CartContext);

    //添加一个state来设置 详情 是否显示
    const [showDeatils, setShowDetails] = useState(false)

    //添加一个state设置 结账页 的显示与隐藏
    const [showCheckout,setShowCheckout] = useState(false)

    //在组件每次重新渲染的时候，检查一下商品的总数量，如果为0则修改 showDeatils==false
    //组件每次重新渲染组件函数体就会执行
    // if(ctx.totalAmount === 0){
    //     setShowDetails(false)
    // }
    //利用useEffect()，使执行时机不相同，在渲染执行结束执行
    useEffect(()=>{
        if(ctx.totalAmount === 0){
            setShowDetails(false)
            setShowCheckout(false)
        }
    },[ctx,setShowDetails,setShowCheckout])

    const showDetailsHandler = ()=>{
        if(ctx.totalAmount === 0){
            setShowDetails(false)
            return 0
        }
        else{
            setShowDetails(prevState => !prevState)
        }
        
    }

    const showCheckoutHandler = ()=>{
        if(ctx.totalAmount === 0){
            return 0
        }
        setShowCheckout(true)
    }

    const hideCheckoutHandler = ()=>{
        setShowCheckout(false)
    }

    return (
        <div className={classes.Cart} onClick={showDetailsHandler}>
            {/* 结算页面 */}
            {showCheckout && <Checkout onHide={hideCheckoutHandler}/>}
            {/* 购物车详情 */}
            {(showDeatils && ctx.totalAmount!==0) && <CartDetails/>?<CartDetails/>:null}
            <div className={classes.Icon}>
                <img src={iconImg}/>                       
                {
                    ctx.totalAmount === 0? null:<span className={classes.TotalAmount}>{ctx.totalAmount}</span>
                }
            </div>

            {
                ctx.totalPrice === 0? <p  className={classes.NoChoice}>未选购商品</p>:<p className={classes.Price}>{ctx.totalPrice}</p>
            }

            {
                <button onClick={showCheckoutHandler} className={`${ctx.totalPrice === 0?classes.NoButton:classes.Button}`}>去结算</button>
            }
        </div>
    );
};

export default Cart;