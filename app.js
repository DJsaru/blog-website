const express = require('express');

//express app
const app = express();

// listen for requests
app.listen(3000);            // he directly as server create krt

// app.get('/', (req, res) => {            // he directly aplyala ky show krych ahe page wrti te dete 
//     res.send('<p> home page </p>');
// });

// app.get('/about', (req, res) => {   // he aplyala directly ji file hwi ahe tya file kde gheun jat
//     res.send('<p>about</p>');       // js ki '/about' search apn ki te 'about' show krt page wrti
// });

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname});  // apn directly about.html file access kru shkto
});

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname});  // root apn folder chya aat mdhlya file access krnyasathi use krto directry...
});

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});  

// 404 pages
app.use((req, res) => {                                        // ha code srvat shewti asla phije nhitr he remaining code run krt nhi agodrch complete jl mnt
    res.sendFile('./views/404.html', {root: __dirname});       // jr ha 'about' chya khali lihila asta tr te about-us code run  nnsta kel ani eroor dili asti ti file available nhi mnun.....(actuallu tyo file available asun to error denar)...
})