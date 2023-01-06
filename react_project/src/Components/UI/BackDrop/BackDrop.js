import React from 'react';
import './BackDrop.css'
import ReactDOM from "react-dom"

//获取backdrop的根元素
const backdropRoot = document.getElementById('backdrop-root')

const BackDrop = (props) => {
    return ReactDOM.createPortal(
        <div className='backDrop'>
            {/* 子元素放到遮罩中，props传递Confirm子组件 */}
            {props.children}
        </div>, backdropRoot
    );
};

export default BackDrop;