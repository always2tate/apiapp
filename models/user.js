let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//定义一个User协议对象结构
let userSchema = new Schema({
    id: String,
    name: String,
    age: String
});

module.exports = mongoose.model("User", userSchema, 'user');