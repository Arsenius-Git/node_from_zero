const express = require("express")
const path = require("path")

const app = express()
app.use(express.static("public"))
app.get("/", (req, res)=>{
  res.sendFile(path.join(__dirname, "/page.html"))
})
app.get("/about", (req, res)=>{
  res.send("abt page!")
})
app.get("/time", (req, res) => {
  setTimeout(() => {
    res.send(new Date().toString())
  }, 5000)
})
app.get("/hello", (req,res)=>{
  res.send("Enter a username in url to see the profile")
})
app.get("/hello/:name", (req, res)=> {
  console.log(req.params)
  res.send(`Hello, ${req.params.name}`)
})
app.get("/hello/:first/:last", (req,res)=>{
  console.log(req.params)
  res.send(`${req.params.first, req.params.last}`)
})
app.listen(3000, () => {console.log("app is running on 3000")})


// const fs = require("fs")
// const http = require("http")
// const server = http.createServer((req,res)=> {
//   if (req.url == "/"){
//     fs.readFile('./page.html', 'utf-8',(err, data)=>{
//       if (err){
//         console.log(err)
//         res.end('error reading file')
//         return // off switch so the code does not run further
//       } 
//       res.writeHead(200, {"Content-Type": "text/html"})
//       res.end(data)
//     })
//   } else if (req.url == "/about"){
//     res.end('abtpage')
//   }
// })

// server.listen('3000')