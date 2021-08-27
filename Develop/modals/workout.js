const Schema = mongoose.Schema; 
const mongoose = require("mongoose");

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date(),
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: 'Enter an exercise type',
              },
              name: {
                type: String,
                trim: true,
                required: 'Enter an exercise name',
              },
              duration: {
                type: Number,
                required: 'Enter exercise duration in minutes',
              },
              weight: {
                type: Number,
              },
              reps: {
                type: Number,
              },
              sets: {
                type: Number,
              },
              distance: {
                type: Number,
              },
        },
    ],
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;