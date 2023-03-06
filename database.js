const mongoose = require('mongoose');
//const URI ='mongodb://127.0.0.1:27017/mern-tack'
const URI ='mongodb+srv://victortapia:MordorW2K5@mern-tack.sn6otgw.mongodb.net/test'


mongoose.connect(URI)
    .then(db => console.log('DB Conectada'))
    .catch(err =>console.log(err));

module.exports = mongoose;