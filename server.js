const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/excersizes", { useNewUrlParser: true });

// routes
// app.use(require("./controllers/routes.js"));


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

// const router = require("express").Router();
// router.get("/", (req, res) => {
//     Workout.find({})
//       .sort({ date: -1 })
//       .then(dbWorkout => {
//         res.json(dbWorkout);
//         console.log(dbWorkout);
//       })
//       .catch(err => {
//         res.status(400).json(err);
//       });
//   });