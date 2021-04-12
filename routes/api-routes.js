const router = require("express").Router();
const Workout = require("../models/Workout.js");


// GET / find - get last workout
// find({}).sort({date: -1}).limit(1)
router.get('/workouts', (req, res) => {
  Workout.find({}, (err, workout) => {
    if (err){
      console.log(err);
      return res.status(400).json(err);
    }
    res.json(workout);
  })
})

// POST / create - create new workout
router.post('/workouts', (req, res) => {
  Workout.create(req.body)
  .then(workout => {
    res.json(workout);
  })
  .catch(err => {
    console.log(err);
    res.json(err);
  })
});

// PUT / update - add exercise to last workout
//add exercise to workout
router.put("/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(params.id,
      {$push: {exercises: body}},
      {new: true}
  ).then(workout => {
      res.json(workout);
    })
    .catch(err => {
      res.json(err);
    });
});

// stats page - buggy
router.get("/workouts/range", (req, res) => {
Workout.aggregate([
{
    $addFields: {
        totalWeight: { $sum: "$exercises.weight" },
        totalDuration: { $sum: "$exercises.duration" }
    }
},
]).sort({ day: - 1 }).limit(7).sort( { day: 1 })
.then(workout => {
  res.json(workout);
})
.catch(err => {
  res.json(err);
});
});


// // GET /find - get workouts
// router.get('/workouts/range', (req, res) => {
//   Workout.find().sort({day: -1}).limit(7).sort( { day: 1 })
//   .then(WorkoutData => {
//     //console.log(WorkoutData);
//     return res.json(WorkoutData);
//   })
//   .catch(err => {
//     if (err){
//       console.log(err);
//       return res.status(500).json(err);
//     }
//   })
// });

// db.Workout.aggregate( [
//   {
//     $addFields: {
//       totalDuration: { $sum: "$duration" } ,
//       totalWeight: { $sum: "$weight" }
//     }
//   },
// ] )





module.exports = router;