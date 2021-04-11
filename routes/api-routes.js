const router = require("express").Router();
const db = require("../models");


router.get("/workouts", (req, res) => {
    db.Workout.find({})
      .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });


  // router.post("/workouts", ({ body }, res) => {
  //   db.Workout.create(body)
  //     .then(dbWorkout => {
  //       res.json(dbWorkout);
  //     })
  //     .catch(err => {
  //       res.status(400).json(err);
  //     });
  // });

  router.post('/workouts', (req, res) => {
  db.Workout.create(req.body)
  .then(newWorkout => {
    res.json(newWorkout);
  })
  .catch(err => {
    console.log(err);
    res.json(err);
  })
});

// db.Workout.create({ name: "Excercise" })
//   .then(dbWorkout => {
//     console.log(dbWorkout);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });

// app.get("/", (req, res) => {
//   db.Workout.find({})
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.post("/submit", ({ body }, res) => {
//   db.Workout.create(body)
//     .then(({ _id }) => db.Workout.findOneAndUpdate({},
//       { $push: { books: _id } },
//       { new: true })
//     )
//     .then(dbLibrary => {
//       res.json(dbLibrary);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/books", (req, res) => {
//   db.Book.find({})
//     .then(dbBook => {
//       res.json(dbBook);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/library", (req, res) => {
//   db.Library.find({})
//     .then(dbLibrary => {
//       res.json(dbLibrary);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.get("/populated", (req, res) => {
//   db.Library.find({})
//     .populate("books")
//     .then(dbLibrary => {
//       res.json(dbLibrary);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });



// router.post("/api/transaction", ({ body }, res) => {
//   Transaction.create(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });



module.exports = router;