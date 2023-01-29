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
    }, []);

    return (
        <header>
            <div className="nav-style">
            <h1 className="h1-fit">Dine Diary <img src="./images/avo-header-2.jpeg" alt="avocado" className="avocado"></img> </h1>
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

/*507react-dom.development.js:86 Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.
    at Navbar (https://dine-diaryfe.herokuapp.com/static/js/bundle.js:1678:74)
    at div
    at div
    at Home (https://dine-diaryfe.herokuapp.com/static/js/bundle.js:947:81)
    at RenderedRoute (https://dine-diaryfe.herokuapp.com/static/js/bundle.js:61660:5)
    at Routes (https://dine-diaryfe.herokuapp.com/static/js/bundle.js:62126:5)
    at CurrentUserProvider (https://dine-diaryfe.herokuapp.com/static/js/bundle.js:305:5)
    at App
    at Router (https://dine-diaryfe.herokuapp.com/static/js/bundle.js:62064:15)
    at BrowserRouter (https://dine-diaryfe.herokuapp.com/static/js/bundle.js:60266:5)*/