/* eslint-disable no-undef */
/* eslint-disable no-console */
const express =  require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//Let's connect MongoDB with Mongoose
mongoose.connect('mongodb://localhost/mevn-posts')
// eslint-disable-next-line no-unused-vars
.then(db => console.log('DB connected'))
.catch(err => console.error(err))

//Routes
app.use('/api/posts', require('../routes/posts')) //All routes begin with /api/posts and will get the routes functionality stored in routes/posts


//Settings
// eslint-disable-next-line no-undef
app.set('port', process.env.PORT || 4000)
let port = app.get('port')

//Middleware
app.use(morgan('dev'))

/* Everytime we receive JSON from the client, the server can understand it. This used to be part of body-parser, but comes preinstalled with express now*/
app.use(express.json())


app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
})