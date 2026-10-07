const { body } = require('express-validator');
const { Usuario } = require('../models');

exports.validarRegistro = [
  body('nombre').trim().notEmpty().withMessage('El nombre no puede estar vacío'),
  body('email')
    .trim().toLowerCase()
    .notEmpty().withMessage('El email no puede estar vacío')
    .isEmail().withMessage('El email no es válido')
    .custom(async (email) => {
      const existe = await Usuario.findOne({ where: { email } });
      if (existe) throw new Error('Ya existe una cuenta con ese email');
    }),
  body('password')
    .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres'),
];

exports.validarLogin = [
  body('email').trim().toLowerCase().isEmail().withMessage('El email no es válido'),
  body('password').notEmpty().withMessage('La contraseña no puede estar vacía'),
];