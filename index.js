const express = require("express");
const app = express();

app.use((req, res) => {
    console.log("we got a new request!")
    res.send("Hello, we got your response")
})

app.listen(3000, () => {
    console.log("Listening on Port 3000")
})