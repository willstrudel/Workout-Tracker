const Schema = mongoose.Schema; 
const mongoose = require("mongoose");

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: "Enter the name for this exercise.",
            },
            type: {
                type: String,
                trim: true,
                required: "Enter the type for this exercise.",
            },
            weight: {
                type: Number,
                trim: true,
            },
            sets:  {
                type: Number,
                trim: true,
            },
            reps:  {
                type: Number,
                trim: true,
            },
            duration:  {
                type: Number,
                trim: true,
                required: "Enter the time spent on this exercise.",
            },
            distance:  {
                type: Number,
                trim: true,
            },
        },
    ],
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;