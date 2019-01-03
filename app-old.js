const http = require('http');

http.createServer((req,res)=>{
    
    res.writeHead(200,{'Content-Type': 'applicarion/json'});

    let json = {
        nombre: 'Sergio',
        edad: 24
    }

    res.write(JSON.stringify(json));
    res.end();
}).listen(9598);

console.log('Running by 9598');