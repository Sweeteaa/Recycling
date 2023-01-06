import './ConfirmModal.css'
import Card from '../Card/Card';
import BackDrop from '../BackDrop/BackDrop';

const ConfirmModal = (props) =>{

    return <BackDrop>
        <Card className='confirmModal'>
            <div className='confirmText'>
                <p>{props.confirmText}</p>
            </div>
            <div className='confirmButton'>
                <button onClick={props.onOk}>确认</button>
                <button onClick={props.onCancel} className='cancel'>取消</button>
            </div>
        </Card>
    </BackDrop>

}

export default ConfirmModal;