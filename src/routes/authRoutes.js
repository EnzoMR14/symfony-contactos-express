const router = require('express').Router();
const ctrl = require('../controllers/authController');
const { esInvitado } = require('../middlewares/auth');
const { validarRegistro, validarLogin } = require('../validators/authValidator');

router.get('/registro', esInvitado, ctrl.formRegistro);
router.post('/registro', esInvitado, validarRegistro, ctrl.registro);

router.get('/login', esInvitado, ctrl.formLogin);
router.post('/login', esInvitado, validarLogin, ctrl.login);

router.post('/logout', ctrl.logout);

module.exports = router;