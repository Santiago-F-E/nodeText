const express = require ('express');
const colors = require ('colors');
const dotenv = require ('dotenv').config();

const req = require('express/lib/request');
const server = express();
const Port = process.env.Port;

server.get('/', (req, res)=>{
    res.send('Hola mundo')
})

server.get('/becerra',(req,res)=>{
    res.send('Hola Becerra')
})

server.listen(Port,()=>{
    console.log(`Esta conectado en la url https://localhost:${Port}`.red);
})