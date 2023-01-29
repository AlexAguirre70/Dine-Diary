import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';

function Signup(){  
const navigate = useNavigate()
const [namesignup, setnamesignup] = useState(null);
const [emailsignup, setemailsignup] = useState(null);
const [passwordsignup,setpasswordsignup] = useState(null);
const handleSubmit = async (e) => {
e.preventDefault()
try{
        await fetch('https://serene-mesa-48537.herokuapp.com/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            userfirstname:namesignup, 
            userlastname:'lastname',
            useremail:emailsignup, 
            userpassword:passwordsignup,
            createdate: new Date()
        })
    })
    navigate('/login')
    } catch(error){
    console.error(error)
    }
};
return(
    <div>
    <div>
            <Navbar />
        </div>
    <div className="row">
        <form className="column" id="signup-form">
        <h2 className="loginTitle">Sign Up</h2>
            <label className="loginInput">Name:
            </label>
            <input required className="userInput" type="text" name="name" id="namesignup" onChange={(e)=>{
                 setnamesignup(e.target.value); console.log(namesignup)}}/>
            <label className="loginInput">Email:</label>
            <input required className="userInput" type="email" name="email" id="emailsignup" onChange={(e)=>{
                setemailsignup(e.target.value); console.log(emailsignup)}}/>
            <label className="loginInput">Password:</label>
            <input required className="userInput" type="password" name="password" id="passwordsignup" onChange={(e)=>{
                setpasswordsignup(e.target.value); console.log(passwordsignup)}}/>
            <button onClick={handleSubmit} type="submit" id="signupButton">Sign Up</button>
        </form>
    </div>
    </div>
    );
};

export default Signup;

