const express = require('express');
const PostController = require('./../controllers/PostController');


const {
    body
} = require('express-validator');


const router = express.Router();

router.get('', PostController.getAllPost);

chekData = [

    body('title').isLength({
        min: 5,
    }).withMessage("min is 5 cara...!!!"),
    body('description').isLength({
        min: 5,

    }).withMessage("min is 5 cara...!!!")


]
router.post('', chekData, PostController.storePost);
router.put('/:id', chekData, PostController.updatePost);
router.get('/:id', PostController.showOnePost)
router.patch('/:id', chekData, PostController.patchPost)
router.delete('/:id', PostController.deletePost)

module.exports = router;