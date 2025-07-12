const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');


//express app
const app = express();

//connect to mongodb & listen for requests
const dbURI = 'mongodb+srv://anthonymaky:23101997>node-js.mongodb.net/node-js';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('Connected to DB'))
    .catch((err) => console.log(err));

//reister view engine
app.set('view engine', 'ejs');

//mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog ',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });

    blog.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
});

//middleware & static files
app.use(express.static('public')); 
app.use(morgan('dev'));

app.get('/', (req, res) =>{
   const blogs = [
       {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur '},
       {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur '},
       {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'}
   ];
   res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) =>{
    //res.send('<h1>About Page</h1>');
    res.render('about', {title: 'About'});
});

//redirect
// app.get('/about-me', (req, res) =>{
//     res.redirect('/about');
// });

app.get('/blogs/create', (req, res) =>{
    res.render('create', );
    res.render('create', {title: 'Create a new blog'});
});

//404 page
app.use((req, res) =>{
    res.status(404).render('404', {title: '404'});
});