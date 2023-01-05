import React from 'react';
import './LogItem.css'
import MyDate from './MyDate/MyDate';

const LogItem = (props) => {

    //在函数组件中，属性就相当于是函数的参数，可以通过参数访问
    //在函数组件的形参中定义一个props，props指向一个对象
    //它包含了父组件中传递的所有参数
    return (
        <div className='item'>
            <MyDate date={props.date}/>
            {/* 日志内容容器 */}
            <div className='content'>
                <div className='desc'>{props.desc}</div>
                <div className='time'>{props.time}</div>
            </div>
        </div>
    );
};

export default LogItem;