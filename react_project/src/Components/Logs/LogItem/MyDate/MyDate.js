import React from 'react';
import './MyDate.css'

const MyDate = () => {
    return (
        <div>
            {/* 日期容器 */}
            <div className='date'>
                <div className='month'>4</div>
                <div className='day'>12</div>
            </div>
        </div>
    );
};

export default MyDate;