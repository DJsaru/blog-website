const { render } = require('ejs');
const express = require('express');
const result  = require('lodash');
const mongoose  = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// const morgan = require('morgan'); 

const app = express();

//connect to mangoDB
const dbURI ='mongodb+srv://User1:HXPT3upoybty4kWN@nodejs.4hovdfe.mongodb.net/node-tutsretryWrites=true&w=majority';

mongoose.connect(dbURI)
  .then(result =>  app.listen(3000))
  .catch(err => console.log(err));

app.set('view engine', 'ejs');

// mongoose & mongo tests
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get('/' , (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    // res.sendFile('./web-site/about1.ejs',{ root: __dirname});
    res.render('about2', { title: 'About'});
});

// blog routes
app.use('/blogs', blogRoutes);

app.use((req, res) => {
    // res.sendFile('./web-sit/404e.ejs', { root: __dirname});
    res.render('404e', { title:'404'});
});
