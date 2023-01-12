import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import classes from './Checkout.module.css'
import CartContext from '../../../store/cart-context'
import CheckoutItem from './CheckoutItem/CheckoutItem';
import Bar from './Bar/Bar';
// 结算页面
const checkoutRoot = document.getElementById('checkout-root')

const Checkout = (props) => {

    const ctx = useContext(CartContext)

    return (
        ReactDOM.createPortal(
            <div className={classes.Checkout}>
                <div className={classes.Close}>
                    <span onClick={()=>props.onHide()}>×</span>
                </div>

                <div className={classes.MealsDesc}>
                    <header className={classes.Header}>
                        <p className={classes.Title}>餐品详情</p>
                    </header>

                    <div className={classes.Meals}>
                        {ctx.items.map(item=><CheckoutItem key={item.id} meal={item}/>)}
                    </div>

                    <footer className={classes.Footer}>
                        <p className={classes.Price}>{ctx.totalPrice}</p>
                    </footer>
                </div>

                <Bar totalPrice={ctx.totalPrice}/>
            </div>,checkoutRoot
        )
    );
};

export default Checkout;