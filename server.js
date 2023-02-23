const express = require('express')
const app = express()

const archivoBD = require('./conexion')


app.get('/', (req, res) => {
    res.end('Hello World!')
    
})


app.listen(5000,function(){
    console.log('server is hola running')
})
