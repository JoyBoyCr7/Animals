const express = require("express")

const Animals = require("../models/animal")

const router = express.Router()

///////////////////////
// Declare Routes and Routers 
///////////////////////
// INDUCES - Index, New, Delete, Update, Create, Edit, Show

//index
router.get("/animals",async(req,res) => {
    const allAnimals = await Animals.find({})
    //// testing
    // console.log(allAnimals)
    ////
    res.render("index.ejs",{allAnimals})
    
});

//new
router.get("/animals/new",(req,res) => {
    res.render("new.ejs")
});

//Delete
router.delete("/animals/:id",async(req, res) => {
    const id = req.params.id
    const animal = await Animals.findByIdAndRemove(id)
    // testing
    console.log(id)
    //
    res.redirect("/animals")
})
// Update
router.put("/animals/:id",async(req,res)=>{
    const id = req.params.id
    req.body.extinct = req.body.extinct === "on" ? true:false
    console.log(req.body)
    const updated = await Animals.findByIdAndUpdate(id,req.body)
    console.log("yooooo",updated)
    res.redirect("/animals")
})

//Create
router.post("/animals", (req,res) => {
    req.body.extinct = req.body.extinct === "on" ? true:false
    const body = req.body
    //testing
    console.log(body)
    //
    Animals.create(req.body)
    res.redirect("/animals")
})

// Edit
router.get("/animals/:id/edit", async(req,res) =>{
    const id = req.params.id
    const animal = await Animals.findById(id)
    // testing
    console.log(animal)
    ////
    res.render("edit.ejs",{animal,id})
})

//show
router.get("/animals/:id", async(req,res) => {
    const id = req.params.id
    const Animal = await Animals.findById(id)
    // testing
    console.log(Animal)
    //
    res.render("show.ejs", {Animal,id})
});

module.exports = router