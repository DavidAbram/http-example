var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();


app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
   res.render('form');
});

// for parsing application/json
app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({ extended: true })); 

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.post('/', function(req, res){
  const result = JSON.stringify(req.body, null, 2);
  console.log(result);
  res.send(result);
});
app.listen(3000);