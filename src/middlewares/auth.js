// Solo para usuarios logueados
exports.estaLogueado = (req, res, next) => {
  if (req.session.usuario) return next();
  res.redirect('/login');
};

// Solo para quien NO ha iniciado sesión (login y registro)
exports.esInvitado = (req, res, next) => {
  if (!req.session.usuario) return next();
  res.redirect('/contactos');
};

// Para restringir por rol (por ejemplo, requiereRol('ROLE_ADMIN'))
exports.requiereRol = (rol) => (req, res, next) => {
  if (req.session.usuario && req.session.usuario.rol === rol) return next();
  res.status(403).send('Acceso denegado');
};