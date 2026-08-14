const express = require("express");
const app = express();
let port = 3000;

app.get("/", (req, res) => {
    res.send("this is root");
})

app.get("/contact", (req, res) => {
    res.send("contact me here");
})

app.listen(port, () => {
    console.log(`listening to ${port}`);
})