// IMPORT EXPRESS
const express = require('express');

// EXPRESS APP
const app = express();

// SET THE VIEW ENGINE
app.set('view engine', 'ejs');

// LISTEN FOR REQUESTS
app.listen(3000);

// MIDDLEWARE STATIC FILES (CSS)
app.use(express.static('public'));

// TEST QUOTE, AUTHOR AND TAGS
const testQuote = 'Success is not final, failure is not fatal: it is the courage to continue that counts.';
const testAuthor = 'Winston Churchill';
const testTags = [{tag: 'Success'},{tag: 'Failure'},{tag: 'War'},{tag: 'History'},{tag: 'Motivational'}]

// REDIRECT TO THE QUOTE PAGE
app.get('/', (req,res) => {
    res.redirect('/index.html')    
});

// GET RANDOM QUOTE PAGE
app.get('/index.html', (req,res) => {
    res.render('index', {pageTitle: 'Random Quote',quoteText: testQuote, quoteAuthor: testAuthor, tags:testTags});
});

// CATCH 404 PAGES
app.use( (req,res) => {
    res.status(404).render('404', {pageTitle: '404 Not Found'});
});