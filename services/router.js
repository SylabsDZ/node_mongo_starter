const ItemsController = require('../controllers/itemsController');
var router = require('express').Router();

router.route('/items/insert')
  .post(ItemsController.insert);

router.route('/items/list')
  .post(ItemsController.list);

router.route('/items/delete/:id')
  .get(ItemsController.delete_item);

router.route('/items/update/:id')
  .post(ItemsController.update_item)

module.exports = router;
