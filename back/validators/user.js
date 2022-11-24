const {check } = require("express-validator");

exports.userValidator = [
  check("email")
    .not()
    .isEmpty()
    .withMessage("Se requiere el email")
    .isEmail()
    .withMessage("Formato de email invalido"),
  check("password")
    .not()
    .isEmpty()
    .withMessage("Se requiere la contrasenia")
    .isLength({ min: 8, max: 120 })
    .withMessage("Formato de email invalido"),
  check("nombre").isString().withMessage("El nombre no debe contener numeros"),
];

exports.loginValidator=[
    check("email")
    .not()
    .isEmpty()
    .withMessage("Se requiere el email")
    .isEmail()
    .withMessage("Formato de email invalido"),
  check("password")
    .not()
    .isEmpty()
    .withMessage("Se requiere la contrasenia")
    .isLength({ min: 8, max: 120 })
    .withMessage("Formato de email invalido"),
]