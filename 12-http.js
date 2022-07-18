const http = require('http')
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our main page')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`<h1>OOPS!</h1>
            <p>we can't seem to find the page </p>
            <a href='/' >back <a>`)
        })
server.listen(5000)