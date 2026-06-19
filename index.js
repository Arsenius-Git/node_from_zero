const fs = require("fs")
const http = require("http")

const server = http.createServer((req,res)=> {
  if (req.url == "/"){
    fs.readFile('./page.html', 'utf-8',(err, data)=>{
      if (err){
        console.log(err)
        res.end('error reading file')
        return // off switch so the code does not run further
      } 
      res.writeHead(200, {"Content-Type": "text/html"})
      res.end(data)
    })
  } else if (req.url == "/about"){
    res.end('abtpage')
  }
})

server.listen('3000')