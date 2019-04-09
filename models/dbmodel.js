var mongoose=require('mongoose');

var Schema=mongoose.Schema;

var contactSchema=new Schema({
  name:{
    type: String,
    required:[true,'name field is required']
  },
  email:{
    type:String,
    required:[true,'email is required']
  },
  message:{
    type:String,

  }
});

var contactModel=mongoose.model('contactUs',contactSchema);

module.exports=contactModel;
