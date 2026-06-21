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