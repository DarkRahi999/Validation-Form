const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const path = require("path");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/login", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../src/index.html"));
});

router.post("/login", urlencodedParser, (req, res) => {
    const body = req.body;
    res.send(`Thanks for Login ${JSON.stringify(body)}`);
});

module.exports = router;
