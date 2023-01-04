import React from 'react';
import './LogItem.css'
import MyDate from './MyDate/MyDate';

const LogItem = () => {
    return (
        <div className='item'>
            <MyDate/>

            {/* 日志内容容器 */}
            <div className='content'>
                <div className='desc'>学习react</div>
                <div className='time'>35min</div>
            </div>
        </div>
    );
};

export default LogItem;