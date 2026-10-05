const { body } = require('express-validator');

exports.validarContacto = [
  body('nombre')
    .trim()
    .notEmpty().withMessage('El nombre no puede estar vacío'),
  body('telefono')
    .trim()
    .notEmpty().withMessage('El teléfono no puede estar vacío')
    .isLength({ max: 15 }).withMessage('El teléfono no puede tener más de 15 caracteres'),
  body('email')
    .trim()
    .notEmpty().withMessage('El email no puede estar vacío')
    .isEmail().withMessage('El email no es válido'),
  body('provinciaId')
    .optional({ values: 'falsy' })
    .isInt().withMessage('La provincia no es válida'),
];