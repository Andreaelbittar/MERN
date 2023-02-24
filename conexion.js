const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Peliculas');


const objetodb = mongoose.connection
objetodb.on('connected', () => { console.log('connected') })
objetodb.on('error', () => { console.log('no connected') })

module.exports = mongoose