const router = require("express").Router();
const Workout = require("../models/Workout.js");
const path = require("path");


//get home page -- is this necessary?
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/exercise.html'))
})


//get exercise page
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/exercise.html'))
})

//get stats page
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/stats.html'))
})

module.exports = router;