import { useState, useEffect } from 'react';
import InfoPanel from './components/infoPanel/InfoPanel';

import './App.css';

function App() {
    const [minutes, setMinutes] = useState(20);
    const [seconds, setSeconds] = useState(0);
    const [breaks, setBreaks] = useState(false);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    const handleSubmit = async () => {
        try {
            setIsTimerRunning(true);
        } catch (err) {
            console.error(err);
        }
    };

    const handlePause = async () => {
        try {
            setIsTimerRunning(false);
        } catch (err) {
            console.error(err);
        }
    };

    const handleReset = async () => {
        try {
            window.location.reload();
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        if (isTimerRunning) {
            let interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes !== 0) {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    } else if (minutes === 0) {
                        setMinutes(4);
                        setSeconds(59);
                        setBreaks(!breaks);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
            return () => {
                clearInterval(interval);
            };
        }
    }, [seconds, minutes, breaks, isTimerRunning]);

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return (
        <div>
            <InfoPanel breaks={breaks} />
            <div className='timerContainer'>
                <div
                    id='random'
                    className={breaks !== true ? 'minutes' : 'random'}
                >
                    <p id='minutes'>{timerMinutes}</p>
                </div>

                <div
                    id='random1'
                    className={breaks !== true ? 'seconds' : 'random1'}
                >
                    <p id='seconds'>{timerSeconds}</p>
                </div>
            </div>

            <div className='controls'>
                <button onClick={handleSubmit}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-6 h-6'
                    >
                        <path
                            fillRule='evenodd'
                            d='M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z'
                            clipRule='evenodd'
                        />
                    </svg>
                </button>
                <button onClick={handlePause}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-6 h-6'
                    >
                        <path
                            fillRule='evenodd'
                            d='M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z'
                            clipRule='evenodd'
                        />
                    </svg>
                </button>
                <button onClick={handleReset}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-6 h-6'
                    >
                        <path
                            fillRule='evenodd'
                            d='M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z'
                            clipRule='evenodd'
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default App;
