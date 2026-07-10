const express = require("express")
const path = require("path")

const app = express()

let links = []
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

app.post("/links", (req,res)=>{
  links.push({title: req.body.title, url:req.body.url,id:Date.now()})
  console.log(links)
  res.json({title: req.body.title, url:req.body.url,id:Date.now()})
})
app.get("/links", (req, res)=>{
  res.json(links)
})
app.get("/links/titles", (req,res)=>{
  console.log(links)
  res.json(links.map(links => links.title))
})
app.get("/links/:id", (req, res)=>{
  res.json(links.find(links=>links.id == req.params.id))
})
app.delete("/links/:id", (req, res)=>{
  const link = links.find(l => l.id == req.params.id)
  if (!link){
    return res.json({response: "no element with that id exists"})
  }
  
  console.log(links.find(links=>links.id == req.params.id))
  res.json(links = links.filter(links=>links.id != req.params.id))
})
app.get("/links/longer-than/:nameLength",(req,res)=>{
  res.json(links.filter(links=>links.title.length > Number(req.params.nameLength)))
})
app.listen(3000, ()=>{console.log(`App runs on: ${"http://localhost:3000/"}`)})