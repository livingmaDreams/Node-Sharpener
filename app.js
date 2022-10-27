const http = require('http');
const port = `5000`;
const server =  http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url == '/home'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>')
        res.write('<body><h1>Welcome Home</h1></body>')
        res.write('</html>')
        res.end();
    } 
    else if(req.url == '/about'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>');
        res.write('<head><title>About Us Page</title></head>')
        res.write('<body><h1>Welcome to About Us Page</h1></body>')
        res.write('</html>')
        res.end();
    } 
    else if(req.url == '/node'){
        res.setHeader('Content-Type','text/html')
        res.write('<html>');
        res.write('<head><title>Node Js Project</title></head>')
        res.write('<body><h1>Welcome to my Node Js Project</h1></body>')
        res.write('</html>')
        res.end();
    } else
    {
        res.setHeader('Content-Type','text/html')
        res.write('<html>');
        res.write('<head><title>Welcome</title></head>')
        res.write('<body><h1>Hello</h1></body>')
        res.write('</html>')
        res.end();
    }

    
})
server.listen(port);