require("dotenv").config()
const mongoose = require("mongoose")

const databaseUrl = process.env.DATABASE_URL

mongoose.connect(databaseUrl,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

mongoose.connection
    .on("open",()=>{console.log("conection open")})
    .on("close",()=>{console.log("conection closed")})
    .on("error",()=>{console.log("there was an error")})


module.exports = mongoose

