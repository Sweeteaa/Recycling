import {React,useState} from 'react';
import './LogItem.css'
import MyDate from './MyDate/MyDate';
import Card from './../../UI/Card/Card'
import ConfirmModal from '../../UI/ConfirmModal/ConfirmModal';

const LogItem = (props) => {

    //添加一个state，记录是否显示窗口
    const [showConfirm, setShowConfirm] = useState(false)

    //在函数组件中，属性就相当于是函数的参数，可以通过参数访问
    //在函数组件的形参中定义一个props，props指向一个对象
    //它包含了父组件中传递的所有参数

    const deleteHanlder = () =>{
        // const isDel = confirm('确认删除？')
        // if(isDel){
        //     //删除当前item => 从数据state移除指定数据
        //     // props.onDelLog(props.logIndex)

        //     //闭包
        //     props.onDelLog()
        // }

        setShowConfirm(true)
    }

    const cancelHandler = () =>{
        setShowConfirm(false)
    }

    const okHandler = () =>{
        props.onDelLog()
        setShowConfirm(false)
    }

    return (
        <Card className='item'>
            {showConfirm && <ConfirmModal 
                onCancel = {cancelHandler}
                onOk = {okHandler}
                confirmText="操作不可恢复，是否删除？"/>}
            <MyDate date={props.date}/>
            {/* 日志内容容器 */}
            <div className='content'>
                <div className='desc'>{props.desc}</div>
                <div className='time'>{props.time}</div>
            </div>
            <div>
                <div onClick={deleteHanlder} className='delete'>×</div>
            </div>
        </Card>
    );
};

export default LogItem;