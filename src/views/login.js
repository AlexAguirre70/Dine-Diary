import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {CurrentUser} from '../context/currentuser'
import Navbar from './navbar';


//import { useNavigate } from 'react-router-dom';

function Login() {
    const [passwordLogin,setpasswordLogin] = useState(null);
    const [emailLogin, setemailLogin] = useState(null);
    const {setCurrentUser} = useContext(CurrentUser)
    const navigate = useNavigate()
          async function handleSubmit(e) { 
            e.preventDefault()
            try {
                const response = await fetch('https://serene-mesa-48537.herokuapp.com/auth', {
                method:'POST' , 
                credentials:'include',
                headers:{'Content-Type':"application/json"
            } ,
                body:JSON.stringify({
                    useremail:emailLogin, 
                    userpassword:passwordLogin
                })
            })
            const data = await response.json()
            if (response.status===200) {
                setCurrentUser(data.user)
                localStorage.setItem('token', data.token)
                navigate('/tracker')
            }
            
            
        
    } catch (error) {
            console.log(error)
}};
return (   
    <div>
    <div>
            <Navbar />
        </div>
        <div>
            <div className="row">
                <form className="column" id="login-form">
                    <h2 className="loginTitle">Login</h2>
                    <label className="loginInput">Email:</label>
                    <input className="userInput" type="email" name="email" id="emailLogin" onChange={(e)=>{
                        setemailLogin(e.target.value); console.log(emailLogin)}}/>
                    <label className="loginInput">Password:</label>
                    <input className="userInput" type="password" name="password" id="passwordLogin" onChange={(e)=>{
                        setpasswordLogin(e.target.value); console.log(passwordLogin)}}/>
                    <button onClick={handleSubmit} type="submit" id="loginButton">Login</button>
                </form>
            </div>
        </div>
        </div> 
    );
};

export default Login;



