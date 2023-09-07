const Router = require('express').Router;
const router = new Router();
const {body} = require('express-validator')
const authController = require('../controllers/auth.controller')

router.post('/login',
    body('email').isEmail(),
    body('password').isLength({min: 8}),
    authController.login);
router.post('/logout', authController.logout);

module.exports = router