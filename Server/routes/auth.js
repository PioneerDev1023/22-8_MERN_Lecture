var express = require('express');
var router = express.Router();
var { Joi, validate } = require('express-validation');
var md5 = require('md5');
const User = require('../models/user');

/**
 * API: /auth/login
 */
router.post("/login", validate({
    body: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
}, {}, {}), function (req, res, next) {
    const {
        email,
        password
    } = req.body;

    var result = "Login success!";
    if(email != "pioneerdev1023@gmail.com") {
        result = "Email error!";
    }

    if(password != "123123123") {
        result = "Password incorrect!";
    }
console.log(result);
    res.json({
        data: result
    });
});

/**
 * API: /auth/register
 * Type: POST
 */

router.post("/register", validate({
    body: Joi.object({
        firstName: Joi.string().min(3).max(255).required(),
        lastName: Joi.string().min(3).max(255).required(),
        email: Joi.string().email().required(),
        password: Joi.string().regex(/[a-zA-Z0-9][8,255]/).required(),
    })
}, {}, {}), async function ( req, res, next ) {
    try () {
        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;

        const existOne = await User.findOne ({
            email: email
        });
        if (existOne) {
            return res.json({
                status: false,
                message: "Already exist"
            });
        }

        const 
    }
    catch user = new User();
    user.firstName = firstName
}
}))

module.exports = router;