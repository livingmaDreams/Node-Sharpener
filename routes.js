const fs = require('fs');
const reqHandler = (req,res)=>{
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
}
// TYPE 1
module.exports = reqHandler;


// TYPE 2
// module.exports ={
//     handlereq : reqHandler,
//     sometext: "Hello"
// }


// TYPE 3
// module.exports.handlereq = reqHandler;
// module.exports.sometext = "Hello";

