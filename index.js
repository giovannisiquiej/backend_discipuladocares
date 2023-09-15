const express = require("express")
const app = express()

require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())


// Espacio para poner los routes
const iglesiasRouter = require('./routes/iglesias.router')


// Define los endpoints por router
app.use("/api/iglesias",iglesiasRouter)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server en ejecución.....")
})