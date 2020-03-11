const express = require('express');
const CommentController = require('./../controllers/CommentController');
const isAuth = require('./../middleware/is-auth');


const {
    body
} = require('express-validator');

const router = express.Router();

router.get('', CommentController.getAllComments);

checkData = [
    body('commentaire').isLength({
        min: 5,
    }).withMessage("comment not found !!! ")
]
router.post('', checkData, isAuth, CommentController.storeComment);
router.put('/:id', checkData, isAuth, CommentController.updateComment);
router.get('/:id', CommentController.showOneComment)
router.delete('/:id', isAuth, CommentController.deleteComment)
router.patch('/:id', checkData, isAuth, CommentController.patchComment)

module.exports = router;