const express = require('express'); 
const app = express();
const bodyParser = require('body-parser'); 
const path = require ('path'); 
const PORT = 3000; 

app.set('view engine', 'ejs'); 
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true})); 

// HOMEPAGE
app.get('/', (req, res) => {
    res.send('This is the homepage of Boston Software Jobs Database');
})

// READ ALL COMPANIES
app.get('/', (req, res) => {
    res.send('This is a page with all companies');
})

// CREATE A NEW COMPANY DETAILS PAGE
app.post('/', (req, res) => {
    res.send(`Will CREATE company: ${req.body.title} into the database`);
})

// UPDATE A COMPANY
app.put('/:companyId', (req, res) => {
    res.send(`Will UPDATE company: ${req.body.title} into the database`); 
})

// DELETE A COMPANY
app.delete('/:companyId', (req, res) => {
    res.send(`Will DELETE company: ${req.params.companyId}`); 
} )

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`); 
})
