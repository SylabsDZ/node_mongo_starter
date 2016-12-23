const Item = require('../models/item');

exports.insert = function(req, res, next) {
  var attr1 = req.body.attr1;
  if (!attr1) {
    return res.status(400).json({error: "attr1 is required"});
  }
  var attr2 = req.body.attr2;
  var attr3 = req.body.attr3;
  var item = new Item({
    attr1: attr1,
    attr2: attr2,
    attr3: attr3
  });
  item.save(function(err) {
    if (err) { return res.status(400).json(err); }
    res.json({item_id: item._id});
  });
}

exports.list = function(req, res, next){
  Item.find({}, function (err, items) {
        res.json(items);
  });
}
exports.delete_item = function(req, res, next){
  Item.findById(req.params.id, function(err, item){
    item.remove(function(err, item) {
      console.log("item deleted");
    });
  });
}
exports.update_item = function(req, res, next) {
 Item.findById(req.params.id, function(err, task){
    item.att1 = req.body.att1;
    item.att2 = req.body.att2;
    item.att3 = req.body.att3;
    item.save(function(err, item, count){
      console.log(" item has been updated!");
    })
  });
};
