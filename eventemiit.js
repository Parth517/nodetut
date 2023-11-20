const Eventemitter = require('events');

const customEmitter=new Eventemitter();
customEmitter.on('response',(name,id)=>{
    console.log(`Data recieved, user:${name} with id:${id}`);
});

customEmitter.on('response',()=>{
    console.log(`some other logic here `);
});

customEmitter.emit("response","Parth",1);
/*
sever event emitting
const http = require('http');

const server= http.createServer();


server.on('request',(req,res)=>{
    res.end('Welcome')
});

server.listen(5000);
*/ 