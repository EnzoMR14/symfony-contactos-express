const router = require('express').Router();
const ctrl = require('../controllers/contactoController');

router.get('/', ctrl.listar);
router.get('/:id', ctrl.ficha);

module.exports = router;