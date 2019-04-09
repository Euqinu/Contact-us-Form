 var express=require('express');
var contactM=require('../models/dbmodel.js');
 var router=express.Router();

 router.get('/contact',function(req,res){
   //res.send('hello this is another testing')
   res.render('contactPage');

   //res.send({type:'GET'});
 })
 router.get('/test',function(req,res){
   //res.send('hello this is another testing')
   res.render('test');
   //res.send({type:'GET'});
 })


router.post('/contact',function(req,res,next){
  var name,email,message;
  var demoModel={
    name:req.body.fullname,
    email:req.body.fullemail,
    message:req.body.fullmessage
  };
  contactM.create(demoModel).then(function(contacts){
    //res.send(contacts);
    res.send('Your request has been sent successfully.');
    console.log(contacts);
  }).catch(next)
})



 module.exports=router;
