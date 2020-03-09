const express = require('express');
const UserController = require('./../controllers/UserController');

const router = express.Router();

router.get('', UserController.getAllUsers);
router.post('', UserController.storeUser);
router.put('/:id', UserController.updateUser);
router.get('/:id', UserController.showOneUser)
router.patch('/:id', UserController.patchUser)

module.exports = router;