// Import the connected mongoose object
mongoose = require("./connection")


//////////////////////
// Our model
/////////////////////
const {Schema, model} = mongoose

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

const User = model("User", userSchema)

//export the model
module.exports = User