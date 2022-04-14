import http from 'http';
// import * as data from '.data';

http.createServer((req,res) => {
    var path = req.url.toLowerCase();
    switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Temporary home page');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('I am in the Web Development program this is my fifth quarter and have only taken online classes so far.  I work full time and am taking two classes a quarter.   I love the outdoors and hiking. Unfortunately with a busy schedule it can be challenging to make time for these things.');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found');
            break;
    }
}).listen(process.env.PORT || 3000);