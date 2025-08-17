const express = require("express")
const app = express();
const userRouter = require("./routers/user.route")

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
    res.send("Welcome TO my web server");
})

app.use((req, res) =>{
    res.status(404).send("404 page not found");
})

module.exports = app;