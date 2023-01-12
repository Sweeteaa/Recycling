import React from "react";

// 选购餐品列表

const CartContext = React.createContext({
    items:[],
    totalAmount:0,
    totalPrice:0,
    addItem:()=>{},
    removeItem:()=>{},
    clearCart:()=>{}
})

export default CartContext;