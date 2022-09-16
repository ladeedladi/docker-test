const express = require('express')
const mongoose = require('mongoose')
const { MONGO_IP, MONGO_PORT, MONGO_USER, MONGO_PASSWORD } = require("./config/config")
const app = express()

let mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}/?authSource=admin`

const connectwithRetry = () => {
    mongoose.connect(mongoUrl)
        .then(() => console.log("connected to mongo"))
        .catch(err => {
            console.log("err", err)
            setTimeout(connectwithRetry, 5000)
        })
}
connectwithRetry()
app.get("/", (req, res) => {
    res.send("<h1>Sikk  <h1>")
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("Runing ....." + port)
}) 