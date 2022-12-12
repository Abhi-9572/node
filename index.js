// const app=require('./app')

// console.log("aa");
// console.log(app.x)

const http=require('http');

http.createServer((req,res)=>
{
    res.write("<h1>hi i am abhishek4 raj</h1>");
    res.end();
}).listen(4500)