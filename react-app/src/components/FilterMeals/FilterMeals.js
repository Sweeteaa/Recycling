import React, { useState } from 'react';
import classes from './FilterMeals.module.css'


const FilterMeals = (props) => {

    // const [keyword, setKeyword] = useState('')

    const inputChangeHandler = (e)=>{
        const keyword = e.target.value.trim();
        props.onFilter(keyword)
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