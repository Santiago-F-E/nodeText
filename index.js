
const express = require ('express');
const colors = require ('colors');
const config = require ('./app/config/')
const req = require('express/lib/request');
const server = express();
const Port = process.env.Port;

server.get('/', (req, res)=>{
    res.send('Hola mundo')
})


server.listen(Port, callback);
