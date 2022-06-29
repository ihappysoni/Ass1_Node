const http = require("http");
const server=http.createServer((req,res)=>{
    res.write("<h1>I am Happy Soni</>")
    res.write(JSON.stringify({topic:"Node",about:`Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project`}))
    res.end()
})
server.listen(4000)

