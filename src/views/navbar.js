import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'


function Navbar() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [intervalId, setIntervalId] = useState(null);

    const updateTime = () => {
        setTime(new Date().toLocaleTimeString());
    };

    useEffect(() => {
        const interval = setInterval(updateTime, 1000);
        setIntervalId(interval);
        return () => clearInterval(intervalId);
    }, [intervalId]);

    return (
        <header>
            <div className="nav-style">
            <h1 className="h1-fit">Dine Diary <img src="./images/avo-header-2.jpeg" alt="avocado" class="avocado"></img> </h1>
                <div className="clock-style">
                {time}
                </div>
                <button className="move-right login-home">
                <Link to='/login' className="login-home">Already a user? Login here.</Link>
                </button>
            </div>
        </header>
    );
};

export default Navbar;

