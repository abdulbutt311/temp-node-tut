const http = require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to our home page')
    }

    if(req.url==='/about'){
        res.end('here is our short history')
    }
    res.end(`<h1>OOps</h1>
    <p>We cannot seem to find the apge we are looking</p>
    <a href="/">back home</a>
    `)
})
server.listen(5003)