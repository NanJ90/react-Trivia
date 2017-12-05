const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define our model
const userSchema = new Schema({
  email: {
    type: String,
    unique: true，
    lowercase:true
  },
  passport: String，
});
//Create the model class(mongoose)
const ModelClass = mongoose.model('user', userSchema);
//Export the model
export default ModelClass; 
