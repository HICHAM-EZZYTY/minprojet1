const express = require('express');
const TypeController = require('./../controllers/TypeController');
const isAuth = require('./../middleware/is-auth');


const {
    body
} = require('express-validator');

const router = express.Router();

router.get('', TypeController.getAllTypes);

checkData = [
    body('name').isLength({
        min: 5,
    }).withMessage("min cara is 5 ...!!!")
]
router.post('', isAuth, checkData, TypeController.storeType);
router.put('/:id', isAuth, checkData, TypeController.updateType);
router.get('/:id', TypeController.showOneType);
router.delete('/:id', isAuth, TypeController.deleteType);
router.patch('/:id', isAuth, checkData, TypeController.patchType)

module.exports = router;