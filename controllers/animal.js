///////////////////////////////
// Import Dependencies
////////////////////////////////
const express = require("express")
const Animal = require("../models/animal")

/////////////////////////
// Create Router
////////////////////////
const router = express.Router()

///////////////////////////////////////
// router middleware
///////////////////////////////////////
router.use((req, res, next) => {
    if (req.session.loggedIn){
        next()
    }else{
        res.redirect("/user/login")
    }
})



////////////////////////
// Routes
////////////////////////

router.get("/seed", (req, res) => {
    const startAnimals = [
        { species: "Cow", location: "farm", extinct: false, lifeExpectancy: "5" },
        { species: "Dog", location: "house", extinct: false, lifeExpectancy: "14" },
        { species: "Trex", location: "earth", extinct: true, lifeExpectancy: "100" },
        { species: "Whale", location: "sea", extinct: false, lifeExpectancy: "150" },
      ]

Animal.remove({}, (err, data) => {

    Animal.create(startAnimals, (err, data) => {
        res.json(data)
    })
})
})


// Index Route
router.get("/", (req, res) => {
    Animal.find({username: req.session.username}, (err, animals) => {
      res.render("animals/index.ejs", {animals});
    });
  });


// New Route
router.get("/new", (req, res) => {
    res.render("animals/new.ejs")
})
//Create Route
router.post("/", (req, res) => {
    req.body.extinct = req.body.extinct === "on" ? true : false
    req.body.username = req.session.username
    Animal.create(req.body, (err, animal) => {
        res.redirect("/animals")
    })
})




// Edit Route
router.get("/:id/edit", (req, res) => {
    const id = req.params.id

    Animal.findById(id, (err, animal) => {

        res.render("animals/edit.ejs", {animal})
    })
})


// The Update Route
router.put("/:id", (req, res) =>{
    const id = req.params.id
    req.body.extinct = req.body.extinct === "on" ? true : false
    Animal.findByIdAndUpdate(id, req.body, {new: true}, (err, animal) => {
        res.redirect("/animals")
    })
})


router.delete("/:id", (req, res) => {
    const id = req.params.id
    Animal.findByIdAndRemove(id, (err, animal) => {
        res.redirect("/animals")
    })
})



// Show Route
router.get("/:id", (req, res) => {
    const id = req.params.id
    Animal.findById(id, (err, animal) => {
        res.render("animals/show.ejs", {animal})
    })
})







////////////////////////
// Export the Router
/////////////////////////
module.exports =  router