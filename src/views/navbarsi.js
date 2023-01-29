import React, { useState, useEffect } from 'react';

function Navbarsi() {
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
                <div className="nav-links">
                    <a className="tracker-style" href="/tracker">Meal Tracker</a>
                    <a className="api-style" href="/mealform">Meal Form</a>
                    <a className="api-style" href="/api">Random Recipe</a>
                </div>
            </div>
        </header>
    );
};

export default Navbarsi;