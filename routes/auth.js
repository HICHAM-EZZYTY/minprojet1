const express = require('express');
const {
    body
} = require('express-validator/check');

const User = require('../models/user');
const authController = require('../controllers/AuthController');


const router = express.Router();

router.post(
    '/signup',
    [
        body('email')
        .isEmail()
        .withMessage('Please enter a valid email.')
        .normalizeEmail(),
        body('password')
        .trim()
        .isLength({
            min: 5
        }),
        body('name')
        .trim()
        .not()
        .isEmpty()
    ],
    authController.signup
);

router.post('/login', authController.login);


module.exports = router;