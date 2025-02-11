const http = require('http');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'text/plain'}) //chnouwa besh nraj3ou yaani (header de requette) server : host w port : tebaath aalih des requettes
    res.end('hello from my server')
})

const PORT = 5000;
server.listen(PORT,()=>{
    console.log('listening on port', PORT)
})