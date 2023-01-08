import React from 'react';
import classes from './Counter.module.css'

// 计数器组件

const Counter = (props) => {

    const addButtonHandler = ()=>{
        props.onAdd(props.meal);
    }

    const subButtonHandler = ()=>{
        props.onSub(props.meal);
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
            <button className={classes.Add} onClick={addButtonHandler}><span>+</span></button>
        </div>
    );
};

export default Counter;