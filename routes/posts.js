const express = require('express');
const PostController = require('./../controllers/PostController');

const router = express.Router();

router.get('', PostController.getAllPost);
router.post('', PostController.storePost);
router.put('/:id', PostController.updatePost);
router.get('/:id', PostController.showOnePost)
router.patch('/:id', PostController.patchPost)
router.delete('/:id', PostController.deletePost)

module.exports = router;