const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    // exercises: []
    exercises: [{

        type: {
            type: String,
            trim: true,
            // required: "Enter a type for workout"
        },

        name: {
            type: String,
            trim: true,
            // required: "Enter a name for workout"
        },

        duration: {
            type: Number,
            trim: true,
            // required: "Enter duration for the workout"
        },

        distance: {
            type: Number,
            trim: true,
        },

        weight: {
            type: Number,
            trim: true,
        },

        reps: {
            type: Number,
            trim: true,
            // required: "Enter number of reps for workout"
        },

        sets: {
            type: Number,
            trim: true,
            // required: "Enter number of sets for workout"
        },
    }],
},

    {
        toJSON: {
            //include any virtual properties when data is requested
            virtuals: true
        }
    }
    );

WorkoutSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce((currTotal, { duration }) => currTotal + duration, 0);
})

// WorkoutSchema.virtual('totalWeight').get(function () {
//     return this.exercises.reduce((currTotal, { weight }) => currTotal + weight, 0);
// })


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
