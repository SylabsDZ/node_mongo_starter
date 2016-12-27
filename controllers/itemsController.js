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
  var id = req.params.id;
  var message = "item has been deleted";
  Item.findById(req.params.id, function(err, item){
    if (err) {
      return res.json(err)
    }
    item.remove(function(err, item) {
      if(err){
        return res.status(400).json(err);
      }
      return res.status(200).json({title: item.title, message: message});
    });
  });
}

exports.update_item = function(req, res, next) {
  Item.findById(req.params.id, function(err, item){
    if(err){ return res.json(err); }
    item.title = req.body.title;
    item.priority = req.body.priority;
    item.is_completed = req.body.is_completed;
    item.save(function(err, item, count){
      if(err){
       return res.status(400).json(err);
     }
     return res.status(200).json({status: "item has been updated!"});
    })
  });
};
