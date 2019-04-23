const mongoose = require('mongoose');
const {Schema} = mongoose //We will only use the Schema object that comes with Mongoose

const Post = new Schema({
    //We define the Schema of the Post
    title: String,
    description: String
});

// eslint-disable-next-line no-undef
module.exports = mongoose.model('Post', Post)