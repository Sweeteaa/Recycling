import React from 'react';
import Backdrop from '../Backdrop/Backdrop'
import classes from './Confirm.module.css'

// 清空购物车提示

const Confirm = (props) => {
    return (
        <Backdrop className={classes.ConfirmOuter} onClick={props.onCancel}>
            <div className={classes.Confirm}>
                <p className={classes.ConfirmText}>确认清空购物车？</p>
                <div>
                    <button className={classes.Cancel} onClick={(e)=>{props.onCancel(e)}}>取消</button>
                    <button className={classes.Ok} onClick={()=>{props.onOk()}}>确认</button>
                </div>
            </div>
        </Backdrop>
    );
};

export default Confirm;