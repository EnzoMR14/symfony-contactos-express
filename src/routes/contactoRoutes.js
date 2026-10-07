const router = require('express').Router();
const ctrl = require('../controllers/contactoController');
const { validarContacto } = require('../validators/contactoValidator');
const { estaLogueado } = require('../middlewares/auth');

// Públicas
router.get('/', ctrl.listar);

// Privadas: hay que haber iniciado sesión
router.get('/nuevo', estaLogueado, ctrl.formNuevo);
router.post('/nuevo', estaLogueado, validarContacto, ctrl.crear);

router.get('/:id', ctrl.ficha);

router.get('/:id/editar', estaLogueado, ctrl.formEditar);
router.post('/:id/editar', estaLogueado, validarContacto, ctrl.actualizar);
router.post('/:id/eliminar', estaLogueado, ctrl.eliminar);

module.exports = router;