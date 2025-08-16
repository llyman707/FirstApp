const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("we got a new request!")
//     res.send("Hello, we got your response")
// })
app.get('/', (req, res) => {
    res.send("This is a home page!")
})

app.post('cats', (res, req) => {
    res.send("post request to/catsss!!!")
})

app.get('/cats', (req, res) => {
    res.send("MEOW")
})
app.get('/dogs', (req, res) => {
    res.send("WOOF")
})
app.get(/(.*)/, (req, res) => {
    res.send(`I don't know that path`)
})

app.listen(3000, () => {
    console.log("Listening on Port 3000")
})