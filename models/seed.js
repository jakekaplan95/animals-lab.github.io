////////////////////////////////
// Import Dependencies
////////////////////////////////
const mongoose = require("./connection")
const Animal = require("./animal")


/////////////////////////////////
// Seed Code
/////////////////////////////////
mongoose.connection.on("open", () => {


    const startAnimals = [
        { species: "Cow", location: "farm", extinct: false, lifeExpectancy: "5" },
        { species: "Dog", location: "house", extinct: false, lifeExpectancy: "14" },
        { species: "Trex", location: "earth", extinct: true, lifeExpectancy: "100" },
        { species: "Whale", location: "sea", extinct: false, lifeExpectancy: "150" },
      ]


      Animal.deleteMany({}, (err, data) => {
          Animal.create(startAnimals, (err, data) => {
              console.log(".....Animals made......")
              console.log(data)
              console.log(".....Animals made......")
        })

          mongoose.connection.close
      })

})