const ItemsController = require('../controllers/itemsController');
var router = require('express').Router();

router.route('/items/insert')
  .post(ItemsController.insert);

router.route('/items/list')
  .post(ItemsController.list);

module.exports = router;
