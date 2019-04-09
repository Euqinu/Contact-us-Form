
var express=require('express');
var mongoose=require('mongoose');
var router=require('./router/routes.js');
var bodyParser=require('body-parser');
var app=express();

// app.get('/',function(req,res){
//   res.send('hello this is testing');
// });

mongoose.connect('mongodb://localhost/contactDb');
mongoose.Promise=global.Promise;


app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static('public'));

app.use(router);

app.use(function(err,req,res,next){
  console.log(err.message);
})

app.listen(3000,function(req,res){
  console.log('Listening')
})
