import React, { useContext, useState } from 'react';
import classes from './Cart.module.css'
import iconImg from '../../asset/bag.png'
import CartContext from "../../store/cart-context"
import CartDetails from './CartDetails/CartDetails';

// 购买条

const Cart = () => {

    const ctx = useContext(CartContext);

    const [showDeatils, setShowDetails] = useState(false)

    const showDetailsHandler = ()=>{
        if(ctx.totalAmount === 0){
            return
        }else{
            setShowDetails(prevState => !prevState)
        }
    }

    return (
        <div className={classes.Cart} onClick={showDetailsHandler}>
            {/* 购物车详情 */}
            {showDeatils && <CartDetails/>}
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
                <button className={`${ctx.totalPrice === 0?classes.NoButton:classes.Button}`}>结算</button>
            }
        </div>
    );
};

export default Cart;