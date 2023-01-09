import React, { useContext } from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop'
import classes from './CartDetails.module.css'
import CartContext from '../../../store/cart-context';
import Meal from '../../Meals/Meal/Meal'

// 商品详情

const CartDetails = () => {

    const ctx = useContext(CartContext)

    const deleteHandler = ()=>{
        ctx.clearCart()
    }

    return (
        <Backdrop>
            <div className={classes.CartDetail} onClick={e => e.stopPropagation()}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>餐品详情</h2>
                    <div className={classes.Clear} onClick={deleteHandler}>
                        清空购物车
                    </div>
                </header>
                <div className={classes.MealList}> 
                    {
                        ctx.items.map(item =>
                            <Meal noDesc key={item.id} meal={item}/>
                        )
                    }
                </div>
            </div>
        </Backdrop>
    );
};

export default CartDetails;