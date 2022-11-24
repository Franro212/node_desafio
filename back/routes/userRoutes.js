const express = require("express");

const router = express.Router();

const { newUser, login, listUser, } = require("../controllers/userControllers");
const { runValidation } = require("../validators/runValidation");
const { userValidator, loginValidator } = require("../validators/user");

router.get('/user/listausuario', listUser)
router.post('/user/new',userValidator,runValidation, newUser)
router.post('/user/login',loginValidator, runValidation, login)


module.exports = router;