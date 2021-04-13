const router = require("express").Router();
const Workout = require("../models/Workout.js");



//get most recent workout, add total duration
router.get("/workouts/", (req, res) => {
  Workout.aggregate([
  {
      $addFields: {
          // totalWeight: { $sum: "$exercises.weight" },
          totalDuration: { $sum: "$exercises.duration" }
      }
  },
  ])
  .then(workout => {
    res.json(workout);
  })
  .catch(err => {
    res.json(err);
  });
  });

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



// stats page - buggy. Get last 7 workouts. Add totalDuration field.
router.get("/workouts/range", (req, res) => {
// Workout.find({})
Workout.aggregate([
{
    $addFields: {
        // totalWeight: { $sum: "$exercises.weight" },
        totalDuration: { $sum: "$exercises.duration" }
    }
},
])
.sort({ day: - 1 }).limit(7).sort( { day: 1 })
.then(workout => {
  res.json(workout);
})
.catch(err => {
  res.json(err);
});
});


module.exports = router;