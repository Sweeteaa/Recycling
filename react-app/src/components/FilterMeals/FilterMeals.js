import React, { useEffect, useState } from 'react';
import classes from './FilterMeals.module.css'

// 搜索

const FilterMeals = (props) => {

    const [keyword, setKeyword] = useState('')

    useEffect(()=>{
        const timer = setTimeout(()=>{
            props.onFilter(keyword)
        })
        //在下次effect执行前调用，可以在这个函数中做一些工作来清除上次effect执行所带来的影响
        return ()=>{
            clearTimeout(timer)
        }
    },[keyword])

    const inputChangeHandler = (e)=>{
        setKeyword(e.target.value.trim())
        // props.onFilter(keyword)
    }

    return (
        <div className={classes.FilterMeals}>
            <div className={classes.InputOuter}>
                <input 
                    onChange={inputChangeHandler}
                    type="text" 
                    placeholder={'请输入关键字'} 
                    className={classes.SearchInput}
                />
                <div className={classes.SearchIcon}>搜索</div>
            </div>
      </div>
    );
};

export default FilterMeals;