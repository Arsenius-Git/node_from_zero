const express = require("express")
const path = require("path")

const app = express()

app.use(express.static("public"))
app.use(express.json())

app.get("/", (req,res)=>{
  res.sendFile(path.join(__dirname, "/page.html"))
})
app.get("/time", (req,res)=>{
  setTimeout(()=>{
    res.send(new Date().toString())
  }, 1000)  
})
app.get("/hello", (req,res)=>{
  res.send("Enter username in url to see profile")
})
app.get("/hello/:name", (req,res)=>{
  res.send(`Hello, ${req.params.name}`)
})
app.post("/data/", (req,res)=>{
  console.log(req.body)
  res.json({received: req.body, greeting: req.body.to})
})
app.listen(3000, ()=>{console.log(`App runs on: ${"http://localhost:3000/"}`)})