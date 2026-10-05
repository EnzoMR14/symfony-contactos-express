const router = require('express').Router();
const ctrl = require('../controllers/contactoController');

router.get('/', ctrl.listar);

module.exports = router;