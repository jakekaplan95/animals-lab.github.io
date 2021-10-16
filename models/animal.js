mongoose = require("./connection")


//////////////////////
// Schema
/////////////////////
const {Schema, model} = mongoose

const animalSchema = new Schema({
    species: String,
    location: String,
    extinct: Boolean,
    lifeExpectancy: Number,
    username: String
})

const Animal = model("Animal", animalSchema)


module.exports = Animal