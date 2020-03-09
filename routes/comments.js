const express = require('express');
const CommentController = require('./../controllers/CommentController');

const router = express.Router();

router.get('', CommentController.getAllComments);
router.post('', CommentController.storeComment);
router.put('/:id', CommentController.updateComment);
router.get('/:id', CommentController.showOneComment)
router.delete('/:id', CommentController.deleteComment)
router.patch('/:id', CommentController.patchComment)

module.exports = router;