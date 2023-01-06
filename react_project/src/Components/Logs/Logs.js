import LogItem from './LogItem/LogItem';
import './Logs.css'

import Card from "../UI/Card/Card";
import LogsFilter from './LogsFilter/LogsFilter';
import { useState } from 'react';

const Logs=(props)=>{
    const [year, setYear] = useState(2023)

    let filterData = props.logsData.filter(item => item.date.getFullYear() === year)

    const changeYearHandler = (year)=>{
        setYear(year)
    }

    // const logItemDate = props.logsData.map((item, index) => <LogItem index={index} onDelLog={props.onDelLog} key={item.id} {...item}/>)

    //闭包写法
    const logItemDate = filterData.map((item, index) => <LogItem onDelLog={()=>props.onDelLog(item.id)} key={item.id} {...item}/>)

    return <Card className="logs">
        <LogsFilter year={year} onYearChange={changeYearHandler}/>
        {
            // logsData.map(item => <LogItem date={item.date} desc={item.desc} time={item.time}/>)
            // logsData.map(item => <LogItem key={item.id} {...item}/>)
            logItemDate.length !== 0 ? logItemDate : <p className='no-logs'>没有找到日志！</p>
        }
        {/* <LogItem date={new Date(2021,3,22)} desc={"学习react"} time={"50"}/>
        <LogItem date={new Date(2021,6,4)} desc={"学习js"} time={"70"}/>
        <LogItem date={new Date(2021,9,16)} desc={"学习前端"} time={"30"}/> */}
    </Card>
}

export default Logs;