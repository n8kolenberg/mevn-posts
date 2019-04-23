const express = require('express');
const router = express.Router();

const Post = require('../models/Post'); //bringing in the model we created for Post

router.get('/', async (req, res) => {
    /*const posts = await Post.find() // First find all the Posts and when you're done, store them in posts const
    res.json(posts);*/
    res.json("The server side works 🎉")
})

module.exports = router;
