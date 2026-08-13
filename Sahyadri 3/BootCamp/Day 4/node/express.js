// import module
const express = require("express");
let app = express(); // :routing
app.use(express.json()) // middleware

let studentData = [ 
    { name: "thushara", id: 1234 }, 
    { name: "piya", id: 435 } 
]; 

app.get("/", (req, res) => { 
    res.status(200).send({ msg: "fetch data", student: studentData }); 
});

app.post("/student", (req, res) => {
    let student = req.body
    studentData.push(student);
    // res.send(studentData);
    res.status(200).send({ msg: "created successfully", data:student }); 
})

app.listen(3000, () => console.log('Server running on port 3000'));

