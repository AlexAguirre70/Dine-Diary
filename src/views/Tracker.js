import React, { useContext, useState , useEffect} from 'react';
import DatePicker from "react-datepicker";
import Logoutbtn from '../components/logout';
import {CurrentUser} from '../context/currentuser';
import "react-datepicker/dist/react-datepicker.css";
import {useNavigate} from 'react-router-dom'
import Navbarsi from './navbarsi';

function Tracker() {
    const {currentUser}= useContext(CurrentUser);
    const navigate = useNavigate()
    const [date, onChange] = useState( new Date());
    const [meals,setMeals]=useState([]);
    const [updatemeals,setUpdateMeals] = useState(false)
    useEffect(() =>{
        if (currentUser) {
            if(!updatemeals){
                const start = new Date(date);
                start.setHours(0, 0, 0, 0);
                const end = new Date(date);
                end.setHours(23, 59, 59, 999);
                fetch(`https://serene-mesa-48537.herokuapp.com/meals/${currentUser._id}/${start}/${end}`, {
                    method: 'GET',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' }
                }) 
                .then((response) => response.json())
                .then((data) => {
                    setMeals(data)// Do something with the data
                    
                })
                .catch((error) => {
                    console.error(error);
                });

            } else {
                setUpdateMeals(false)
            }
 
        }
    },[date, currentUser,updatemeals]);

    //delete route
    async function deletedMeal(id) {
        try { 
            await fetch(`https://serene-mesa-48537.herokuapp.com/meals/${id}`, {
                method: 'DELETE'
            })  
            setUpdateMeals(true)
        } catch (err){
            console.error(err)

        }
    };



    
    return (
        <div>
            <div>
                <Navbarsi />
            </div>

            <div className="style-logout">
                <Logoutbtn />
            </div>

            {currentUser ? <p className="display-name" >Hello {currentUser.userfirstname} start tracking your meals here!</p> : null}
            <p className="description">Here you can view all past Dine Diary entries.</p>
            <DatePicker 
                selected={date} 
                onChange= {onChange} value={date}
                dateFormat=	"y-MM-dd"
                timeCaption="time"
            />
            <div className="container">
                <div className='styling-button'>
                <button onClick={() => navigate('/mealform')}>Create A Meal!</button></div>
                <div className="data-container">
                    {meals.map((meal) => (
                        <div className="data-box" key={meal._id}>
                            <h2>NAME: {meal.mealname}</h2>
                            <p>CARBS: {meal.carbs}</p>
                            <p>CALORIES: {meal.calories}</p>
                            <p>FAT: {meal.fat}</p>
                            <p>PROTEIN: {meal.protein}</p>
                            <button onClick={() => deletedMeal(meal._id)}>Delete Meal</button>
                    
                        </div>
                    ))} 
                </div>
   
            </div>
        </div>
    )}

export default Tracker