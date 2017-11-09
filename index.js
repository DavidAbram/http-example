var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();


app.set('view engine', 'pug');
app.set('views', './views');



app.get('/', function(req, res){
  const result = JSON.stringify(req.query, null, 2);
   console.log('GET');
   res.render('form');
});

app.get('/test', function(req, res){
  res.render('test', {
    name: req.query.name,
    email: req.query.email,
  });
});

app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(upload.array()); 
app.use(express.static('public'));

app.post('/', function(req, res){
  const result = JSON.stringify(req.body, null, 2);
  console.log('POST', result);
  res.send(result);
});

app.post('/test', function(req, res){
  res.render('test', {
    name: req.body.name,
    email: req.body.email,
  });
});

app.listen(80);