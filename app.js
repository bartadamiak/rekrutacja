const http = require('http');
const fs = require('fs');
const twit = require('./twit');

twit.getApi();


const server = http.createServer((req, res, ) => {
    fs.readFile('./static/index.html', function (error, docs) {
        if (req.url === '/') {
            console.log('server works');
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(docs);
            let api = fs.readFileSync('./static/api.json')
            res.write(api)
            res.end()


        }
    })

})

server.listen(5000);






