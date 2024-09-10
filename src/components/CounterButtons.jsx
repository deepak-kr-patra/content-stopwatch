import React, { useState } from 'react'
import formatTime from '../utils/formatTime';
import { FaStop } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";


const CounterButtons = () => {

    const [timeContent, setTimeContent] = useState(0); // time in milliseconds
    const [timeBullshit, setTimeBullshit] = useState(0); // time in milliseconds
    const [timeAd, setTimeAd] = useState(0); // time in milliseconds
    const [intervalId, setIntervalId] = useState(null); // To store the interval ID
    const [isRunning, setIsRunning] = useState(false); // TO check if the counter is running

    const startCounter = (toRun) => {
        const button1 = document.getElementById('button-1');
        const button2 = document.getElementById('button-2');
        const button3 = document.getElementById('button-3');

        stopCounter();
        const id = setInterval(() => {
            if (toRun === 1) {
                setTimeContent((prevTime) => prevTime + 10);
                button1.classList.add('animate');
            } else if (toRun === 2) {
                setTimeBullshit((prevTime) => prevTime + 10);
                button2.classList.add('animate');
            } else if (toRun === 3) {
                setTimeAd((prevTime) => prevTime + 10);
                button3.classList.add('animate');
            }
        }, 10);
        setIntervalId(id);
        setIsRunning(true);
    };

    const stopCounter = () => {
        const button1 = document.getElementById('button-1');
        const button2 = document.getElementById('button-2');
        const button3 = document.getElementById('button-3');

        button1.classList.remove('animate');
        button2.classList.remove('animate');
        button3.classList.remove('animate');

        clearInterval(intervalId);
        setIsRunning(false);
        setIntervalId(null);
    };

    const resetCounter = () => {
        setTimeContent(0);
        setTimeBullshit(0);
        setTimeAd(0);
    };

    return (
        <div className='flex flex-col gap-12'>
            <div className='flex items-center justify-center gap-4'>
                <div className='flex flex-col gap-2'>
                    <div id='button-1' className='circular-button' onClick={() => startCounter(1)}>
                        <span className='circular-button-text'>{formatTime(timeContent)}</span>
                    </div>
                    <span className='label-text'>Content</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <div id='button-2' className='circular-button' onClick={() => startCounter(2)}>
                        <span className='circular-button-text'>{formatTime(timeBullshit)}</span>
                    </div>
                    <span className='label-text'>Bullshit</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <div id='button-3' className='circular-button' onClick={() => startCounter(3)}>
                        <span className='circular-button-text'>{formatTime(timeAd)}</span>
                    </div>
                    <span className='label-text'>Ad</span>
                </div>
            </div>
            <div className='flex items-center justify-center gap-4'>
                <div>
                    <button className='small-btn' onClick={() => stopCounter()}><FaStop />
                    </button>
                </div>
                <div>
                    <button className='small-btn' onClick={() => resetCounter()} disabled={isRunning}><GrPowerReset />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CounterButtons