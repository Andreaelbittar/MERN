const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');


const objetodb = mongoose.connection
objetodb.on('connected', () => { console.log('connected') })
objetodb.on('error', () => { console.log('no connected') })

module.exports = mongoose