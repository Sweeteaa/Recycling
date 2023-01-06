import React from 'react';

const LogsFilter = (props) => {

    const changeHandler = (e) =>{
        //父组件传递的方法onYearChange
        props.onYearChange(+e.target.value)
    }

    return (
        <div>
            年份：<select onChange={changeHandler} value={props.year}>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    );
};

export default LogsFilter;