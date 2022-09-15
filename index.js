const express = require('express')
const mongoose = require('mongoose')

const app = express()

mongoose.connect("mongodb://lad:sikk@mongo/?authSource=admin").then(() => { console.log("connected to mongo") }).catch(err => { console.log(err) })
app.get("/", (req, res) => {
    res.send("<h1>Sikk sdddddss <h1>")
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("Runing ....." + port)
})