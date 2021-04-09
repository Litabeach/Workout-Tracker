const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },

    // excersizes: [],
    
    type: {
        type: String,
        trim: true,
        required: "Enter a type for workout"
    },

    name: {
        type: String,
        trim: true,
        required: "Enter a name for workout"
    },

    duration: {
        type: Number,
        required: "Enter duration for the workout"
    },

    weight: {
        type: Number,
        required: "Enter weight for the workout"
    },

    reps: {
        type: Number,
        required: "Enter number of reps for workout"
    },
    
    sets: {
        type: Number,
        required: "Enter number of sets for workout"
    }

});

//this will be the function to add total weight and duration
// db.workout.aggregate([
//     {
//         $addFields: {
//             totalWeight: { $sum: "$weight" },
//             totalDuration: { $sum: "$duration" }
//         }
//     },
// ]);


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;