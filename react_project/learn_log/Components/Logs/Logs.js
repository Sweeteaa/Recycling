import LogItem from './LogItem/LogItem';
import './Logs.css'

const Logs=()=>{
    const logsData = [
        {
            id:'001',
            date:new Date(2021,3,24),
            desc:'学习react',
            time:67
        },
        {
            id:'002',
            date:new Date(2021,4,12),
            desc:'学习vue',
            time:87
        },
        {
            id:'003',
            date:new Date(2021,8,2),
            desc:'学习js',
            time:23
        }
    ]

    const logItemDate = logsData.map(item => <LogItem key={item.id} {...item}/>)

    return <div className="logs">
        {
            // logsData.map(item => <LogItem date={item.date} desc={item.desc} time={item.time}/>)
            // logsData.map(item => <LogItem key={item.id} {...item}/>)
            logItemDate
        }
        {/* <LogItem date={new Date(2021,3,22)} desc={"学习react"} time={"50"}/>
        <LogItem date={new Date(2021,6,4)} desc={"学习js"} time={"70"}/>
        <LogItem date={new Date(2021,9,16)} desc={"学习前端"} time={"30"}/> */}
    </div>
}

export default Logs;