import React from 'react';
import { useRef } from 'react';
import './App.css'

const App = () => {
    const ref = useRef()
    console.log(ref);
    ref.current.innerText = 'hhh'
    return (
        <div className={'item'} >
            <h1 id="title" ref={ref}>标题</h1>
            <button>-</button>
            <button>+</button>
        </div>
    );
};

export default App;