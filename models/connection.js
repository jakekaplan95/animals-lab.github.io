////////////////////////////
// Import Dependencies
//////////////////////////
require("dotenv").config()
const mongoose = require("mongoose")


///////////////////////////////////////////
// Establish Database Connection
//////////////////////////////////////////
const Database_URL = process.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// Establish Connection
mongoose.connect(Database_URL, CONFIG)

mongoose.connection
.on("open", () => console.log("connected to mongo"))
.on("close", () => console.log("disconnected from mongo"))
.on("error", (error) => console.log(error))


/////////////////////////////////////
// Export the Connected Mongoose
////////////////////////////////////
module.exports = mongoose