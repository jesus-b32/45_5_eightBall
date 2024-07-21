import React, { useState } from 'react';
import "../css/eightBall.css";

const EightBall = ({answers}) => {
    const genRandom = () => Math.floor(Math.random() * (answers.length - 1));

    const newAnswer = () => {
        setColor(answers[genRandom()].color);
        setMessage(answers[genRandom()].msg);
    }

    const [color, setColor] = useState('black');
    const [message, setMessage] = useState('Think of a Question');

    return (
        <div className='eightBall' onClick={newAnswer} style={{backgroundColor: `${color}`}}>
            {message}
        </div>
    )
}

export default EightBall;