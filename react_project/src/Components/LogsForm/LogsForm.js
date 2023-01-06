import {React, useState} from 'react';
import Card from '../UI/Card/Card'
import './LogsForm.css'

const LogsForm = (props) => {
    //当表单发生变化，获取用户输入的内容
    //创建一个响应函数，监听表单变化

    // let inputDate = ''
    // let inputDesc = ''
    // let inputTime = ''

    const [inputDate, setInputDate] = useState('')
    const [inputDesc, setInputDesc] = useState('')
    const [inputTime, setInputTime] = useState('')

    // const [forData, setFormData] = useState({
    //     inputDate:'',
    //     inputDesc:'',
    //     inputTime:''
    // })




    const dateChangeHandler = (e)=>{
        //事件对象e中保存了当前事件触发时的所有信息
        //event.target执行的是触发事件的对象
        setInputDate(e.target.value);
    }

    const descChangeHandler = (e)=>{
        //事件对象e中保存了当前事件触发时的所有信息
        //event.target执行的是触发事件的对象
        setInputDesc(e.target.value);
    }
    
    const timeChangeHandler = (e)=>{
        //事件对象e中保存了当前事件触发时的所有信息
        //event.target执行的是触发事件的对象
        setInputTime(e.target.value);
    }

    //当表单提交时汇总表单中数据
    const formSubmitHandler = (e)=>{
        //取消表单默认行为
        e.preventDefault();

        const newLog = {
            date: new Date(inputDate),
            desc:inputDesc,
            time:inputTime
        }

        //添加新日志时，调用父组件传递来的函数
        props.onSaveLogs(newLog);

        setInputDate('')
        setInputDesc('')
        setInputTime('')

        // console.log(newLog);
    }

    return (
        <Card className="logs-form">
            <form>
                <div className='form-item'>
                    <label htmlFor='date'>日期</label>
                    <input onChange={dateChangeHandler} value={inputDate} id="date" type="date"/>
                </div>
                <div className='form-item'>
                    <label htmlFor='desc'>内容</label>
                    <input onChange={descChangeHandler} value={inputDesc} id="desc" type="text"/>
                </div>
                <div className='form-item'>
                    <label htmlFor='time'>时长</label>
                    <input onChange={timeChangeHandler} value={inputTime} id="time" type="number"/>
                </div>
                <div className='form-btn'>
                    <button onClick={formSubmitHandler}>添加</button>
                </div>
            </form>
        </Card>
    );
};

export default LogsForm;