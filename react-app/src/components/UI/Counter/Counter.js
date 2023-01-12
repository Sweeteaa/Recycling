import React, { useContext } from 'react';
import classes from './Counter.module.css'
import CartContext from '../../../store/cart-context';

// 计数器组件

const Counter = (props) => {
    //context app->counter
    const ctx = useContext(CartContext)

    const addButtonHandler = ()=>{
        // props.onAdd(props.meal);
        ctx.addItem(props.meal)
    }

    const subButtonHandler = ()=>{
        // props.onSub(props.meal);
        ctx.removeItem(props.meal)
    }

    return (
        <div className={classes.Counter}>

            {
                (props.meal.amount && props.meal.amount !== 0) ? (
                    <>
                        <button className={classes.Sub} onClick={subButtonHandler}><span>-</span></button>
                        <span className={classes.count}>{props.meal.amount}</span>
                    </>
                ) : null

            }
            <button className={classes.Add} onClick={addButtonHandler} ><span>+</span></button>
        </div>
    );
};

export default Counter;