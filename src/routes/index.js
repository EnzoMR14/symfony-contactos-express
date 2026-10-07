const router = require('express').Router();

router.get('/', (req, res) => res.redirect('/contactos'));
router.use('/contactos', require('./contactoRoutes'));
router.use('/', require('./authRoutes'));

module.exports = router;