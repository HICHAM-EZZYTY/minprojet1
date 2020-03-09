const express = require('express');
const TypeController = require('./../controllers/TypeController');

const router = express.Router();

router.get('', TypeController.getAllTypes);
router.post('', TypeController.storeType);
router.put('/:id', TypeController.updateType);
router.get('/:id', TypeController.showOneType);
router.delete('/:id', TypeController.deleteType);
router.patch('/:id', TypeController.patchType)

module.exports = router;
