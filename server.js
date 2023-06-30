////////////////////////
// Setup - Import deps and create app object
////////////////////////
const express = require("express")
const morgan = require("morgan")
const routes = require("./controllers/routs")
require("dotenv").config()
const animal = require("./models/animal")
const methodOveride = require("method-override")
const app = express()

const port = process.env.PORT

//////////////////////
// Declare Middleware
//////////////////////

app.use(morgan("dev"))
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(methodOveride('_method'))
app.use("/", routes)


///////////////////////////
// Server Listener
///////////////////////////

app.listen(port,()=>{
    console.log(`listening on ${port}`)
})


