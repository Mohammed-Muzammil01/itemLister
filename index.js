const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) => {  
    let filePath = path.join(__dirname,'public', req.url === '/?enlist=jj' ? 'itemlist.html' : req.url);
    let extname = path.extname(filePath);
    let contentType = 'text/html';
    // console.log(req.url);
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
        case '.css':
            contentType = 'text/css';
            break;
    } 
    fs.readFile(filePath, (err,content) =>{
        // console.log(filePath);
        if(err){
            if(err.code == 'ENOENT'){
                fs.readFile(path.join(__dirname,'public','404.html'),(err,content) => {
                    res.writeHead(200,{'Content-type':'text/html'});
                    res.end(content, 'utf8');
                })
            } else {
                res.writeHead(500);
                res.end(`Server error: ${err.code}`);
            }
        } else{
            res.writeHead(200,{'Content-Type':contentType});
            res.end(content,'utf8');
        }
    });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT,() => {console.log(`server running on ${PORT}`)});