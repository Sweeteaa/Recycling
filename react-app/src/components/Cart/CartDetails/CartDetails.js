import React, { useContext, useState } from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop'
import classes from './CartDetails.module.css'
import CartContext from '../../../store/cart-context';
import Meal from '../../Meals/Meal/Meal'
import Confirm from '../../UI/Confirm/Confirm';

// 商品详情

const CartDetails = () => {

    const ctx = useContext(CartContext)

    //设置state，控制确认框的显示
    const [showConfirm, setShowConfirm] = useState(false)

    const showConfirmHandler = ()=>{
        setShowConfirm(true)
    }

    const cancelHandler = (e)=>{
        e.stopPropagation()
        setShowConfirm(false)
    }

    const okHandler = ()=>{
        deleteHandler()
    }

    const deleteHandler = ()=>{
        ctx.clearCart()
    }

    return (
        <Backdrop>

            {showConfirm && <Confirm comfirmText={'确认清空购物车吗？'} onCancel={cancelHandler} onOk={okHandler}/>}

            <div className={classes.CartDetail} onClick={e => e.stopPropagation()}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>餐品详情</h2>
                    <div className={classes.Clear} onClick={showConfirmHandler}>
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