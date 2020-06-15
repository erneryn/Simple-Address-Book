const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = Schema({
    name:{
        type: String,
        required:[true," name cannot be empty !"]
    },
    phoneNumber:{
        type: Number,
        required: [true," phone number cannot be empty !"]
    },
   address:{
       type: String,
       required: [true,"adress cannot be empty ! "]
   },
   email:{
       type: String,
       required: [true, " email cannot be empty !"]
   },
   avatar:{
       type: String
   }

})

module.exports = mongoose.model('Contacts',contactSchema)