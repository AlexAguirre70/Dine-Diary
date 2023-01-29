import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';


function Home() {
    const navigate = useNavigate();

    return (
        
        <div>
            <div>
            <Navbar />
        </div>
            <div className="jumbo-style container">
                <div className="jumbotron text-center">
                    <h1 className="h1-meal">Welcome to our Meal Tracking App</h1>
                    <p className="header-jumbo">We are dedicated to helping you become your BEST self by providing everything you need to keep you healthy in one app. If you are interested in learning more refer to the information below to see the features we offer.</p>
                    <button className="btn btn-dark btn-lg" onClick={() => navigate('/signup')}>Sign Up Now</button>
                </div>
            </div>

            <div className="myWork">
                <div className="card1">
                    <div className="allCards">
                        <h2>Track Food <i className="fa fa-cutlery"></i></h2>
                        <p>Here you can input a variety of information. Start by inputing the name of your meal 
                        then you can input the amount of calories, carbs, fat, and protein in the meal.  </p>
                    </div>
                </div>
                <div className="card2">
                    <div className="allCards">
                        <h2>Track Dates <i className="fa fa-info"></i></h2>
                        <p>Keep track of past food inputed with our calender. With this calender you can
                        look back and see how much progress you've been making..</p>
                    </div>
                </div>
                <div className="card3">
                    <div className="allCards">
                        <h2> Random Recipes<i className="fa fa-calendar"></i></h2>
                        <p>If you're looking to expand your knowledge on new recipes, the random recipes section is perfect for you. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;