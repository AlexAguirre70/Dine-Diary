const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');
const express = require('express');
const { Decimal128 } = require('bson');
const app = express();
const mealsSchema = new Schema({ 
    meal_user_id:String,
    mealname:String,
    calories:String,
    carbs:String,
    fat:String,
    protein:String,
    mealcreatedate:Date
});

const meals = mongoose.model('meals', mealsSchema);



module.exports = meals;