import React from 'react';
import './MyDate.css'

const MyDate = (props) => {
    const month = props.date.toLocaleString('zn-CN',{month:'numeric'})
    const day = props.date.getDate()
    return (
        <div>
            {/* 日期容器 */}
            <div className='date'>
                <div className='month'>{month}</div>
                <div className='day'>{day}</div>
            </div>
        </div>
    );
};

export default MyDate;