const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
   const url = req.url;
   const method = req.method;
   if(url === '/'){
    fs.readFile("message.txt",{encoding :"utf-8"},(err,data)=>{
        if(err)
        console.log(err);
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>')
        res.write(`<body><form action="/message" method="POST"><input type="text" id="input" name="message"><button type ="submit">Send</button><label for="input" id="label">${data}</label></body>`)
        res.write('</html>') 
        return res.end();
    })
        
   }
   if(url === '/message' && method === 'POST'){
    const body=[];
    req.on('data',(chunk)=>{
     body.push(chunk);
    });
    return req.on('end',()=>{
          const parsedBody = Buffer.concat(body).toString();
          const msg = parsedBody.split('=')[1];
          fs.writeFile('message.txt',msg,(err)=>{
            res.statusCode=302;
            res.setHeader('Location','/');
            return res.end();
          });

    }); 
   }
})
server.listen(5000) 