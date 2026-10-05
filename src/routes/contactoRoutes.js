const router = require('express').Router();
const ctrl = require('../controllers/contactoController');
const { validarContacto } = require('../validators/contactoValidator');

router.get('/', ctrl.listar);

// Las rutas fijas (/nuevo) van ANTES que las que llevan :id
router.get('/nuevo', ctrl.formNuevo);
router.post('/nuevo', validarContacto, ctrl.crear);

router.get('/:id', ctrl.ficha);
router.get('/:id/editar', ctrl.formEditar);
router.post('/:id/editar', validarContacto, ctrl.actualizar);
router.post('/:id/eliminar', ctrl.eliminar);

module.exports = router;