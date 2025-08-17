const express = require("express")
const app = express();
const bodyParser = require("body-parser")


app.get("", (req, res) => {
    res.send("Welcome TO my web server");
})

app.use((req, res) =>{
    res.status(404).send("404 page not found");
})

module.exports = app;