const mongoose = require("./connection")

const animalSchema = new mongoose.Schema({
    name:String,
    species: String,
    extinct: Boolean,
    location: String,
    lifeExpectancy: Number
})

const Animal = mongoose.model("animal",animalSchema)

module.exports = Animal;

