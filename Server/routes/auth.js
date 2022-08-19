var express = require('express');
var router = express.Router();
var { Joi, validate } = require('express-validation');

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

module.exports = router;