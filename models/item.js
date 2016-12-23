const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var itemSchema = new Schema({
  attr1: {
    type: Number
  },
  attr2: {
    type: String
  },
  attr3: [
    {
      attr3_1: {type: String},
      attr3_2: {type: Boolean}
    }
  ]
});


module.exports = mongoose.model('item', itemSchema);
