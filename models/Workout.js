const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },

    // excersizes: [],

    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,

});

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