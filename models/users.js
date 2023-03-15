const mongoose = require('mongoose')
const { Schema } = mongoose;

const TaskSchema = new Schema({
    name:{type:String,require:true},
    password:{type:String,require:false}
});

module.exports = mongoose.model('users',TaskSchema);

