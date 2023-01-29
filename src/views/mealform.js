import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {CurrentUser} from '../context/currentuser'
import Logoutbtn from '../components/logout';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbarsi from './navbarsi';


function Mealform(){
    const navigate = useNavigate();
    const {currentUser}= useContext(CurrentUser);
    const [mealname, setMealname]= useState(null);
    const [calories, setCalories] = useState(null);
    const [carbs, setCarbs]= useState(null);
    const [fat, setFat]= useState(null);
    const [protein,setProtein]= useState(null);
    const [date, onChange] = useState( new Date());
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await fetch('https://serene-mesa-48537.herokuapp.com/meals', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({   
                    meal_user_id:currentUser._id, 
                    mealname:mealname,
                    calories:calories,
                    carbs:carbs,
                    fat:fat,
                    protein:protein,
                    mealcreatedate:date
                })
            })
            navigate('/tracker')
    
        } catch(error){
        console.error(error)
    
        } 
    };

return (
    
    <div>
        <div>

            <Navbarsi />
        </div>

        <div class="style-logout">
            <Logoutbtn />
        </div>

    <p className="display-name">Create a meal here!</p>
    <p className="description">Start by selecting a date.</p>

        <DatePicker 
            selected={date} 
            onChange= {onChange} value={date}
            dateFormat=	"y-MM-dd"
            timeCaption="time"
        />

    <div className="row">
        <form className="column" id="meal-form">
        <h2 className="mealTitle">Create a Meal!</h2>
            <label className="loginInput">Meal Name:
            </label>
            <input required className="userInput" type="text" name="Meal name:" id="insertmealname" onChange={(e)=>{
                 setMealname(e.target.value); console.log(mealname)}}/>
            <label className="loginInput">Calories:</label>
            <input required className="userInput" type="text" name="Calories:" id="insertcalories" onChange={(e)=>{
                setCalories(e.target.value); console.log(calories)}}/>
            <label className="loginInput">Carbs:</label>
            <input required className="userInput" type="text" name="Carbs" id="insertcarbs" onChange={(e)=>{
                setCarbs(e.target.value); console.log(carbs)}}/>
            <label className="loginInput">Fat:</label>
            <input required className="userInput" type="text" name="Fat" id="insertfat" onChange={(e)=>{
                setFat(e.target.value); console.log(fat)}}/>
            <label className="loginInput">Protein:</label>
            <input required className="userInput" type="text" name="Protein" id="insertprotein" onChange={(e)=>{
                setProtein(e.target.value); console.log(protein)}}/>
            <div className='styling-button'>
            <button onClick={handleSubmit} type="submit" id="createmeal">Create Meal!</button></div>
        </form>
    </div>
    
    </div>
    );
    };  
    export default Mealform;