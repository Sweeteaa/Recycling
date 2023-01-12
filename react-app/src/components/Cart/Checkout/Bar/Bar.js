import React from 'react';
import classes from './Bar.module.css'

const Bar = (props) => {
    return (
        <div className={classes.Bar}>
            <div className={classes.Price}>{props.totalPrice}</div>
            <button className={classes.Button}>去支付</button>
        </div>
    );
};

export default Bar;