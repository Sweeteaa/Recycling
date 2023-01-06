import { useState } from "react";
import Logs from "./Components/Logs/Logs";
import LogsForm from "./Components/LogsForm/LogsForm";
import './App.css'

const App=()=>{

    const [logsData, setLogsData] = useState([
        {
            id:'001',
            date:new Date(2022,3,24),
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
    ]);

    const saveLogHandler = (newLog) =>{
        console.log(newLog);
        newLog.id = Date.now() + '';
        setLogsData([...logsData, newLog])

    }

    const delLogByIndex = (index) =>{
        setLogsData(prevState => {
            const newLogs = [...prevState]
            newLogs.splice(index, 1)
            return newLogs
        })
        // logsData.filter(index => index != id)
    }

    const delLogById = (id) =>{
        setLogsData(prevState => {
            return prevState.filter(item => item.id != id)
        })
        // logsData.filter(index => index != id)
    }

    return <div className="app">
        <LogsForm onSaveLogs={saveLogHandler}/>
        <Logs logsData={logsData} onDelLog={delLogById}/>
    </div>
}

export default App;