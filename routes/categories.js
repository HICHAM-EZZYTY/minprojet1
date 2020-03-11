const express = require('express');
const CategoryController = require('./../controllers/CategoryController');
const isAuth = require('./../middleware/is-auth');

const {
    body
} = require('express-validator');

const router = express.Router();



router.get('', CategoryController.getAllCategories);

checkData = [
    body('title').isLength({
        min: 5
    }).withMessage("cette valeur ne respecte pas  Category l'titlel !!"),

    body('icon').isLength({
        min: 6,

    }).withMessage("cette valeur ne respecte pas Category  icon !!"),
]

router.post('', isAuth, checkData, CategoryController.storeCategory);
router.put('/:id', isAuth, checkData, CategoryController.updateCategory);
router.get('/:id', CategoryController.showOneCategory);
router.patch('/:id', isAuth, checkData, CategoryController.patchCategory);
router.delete('/:id', isAuth, CategoryController.deleteCategory)



module.exports = router;