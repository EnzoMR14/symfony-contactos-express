module.exports = (sequelize, DataTypes) => {
  const Contacto = sequelize.define('Contacto', {
    nombre:   { type: DataTypes.STRING(255), allowNull: false },
    telefono: { type: DataTypes.STRING(15),  allowNull: false },
    email:    { type: DataTypes.STRING(255), allowNull: false },
  }, { tableName: 'contactos' });

  Contacto.associate = (models) => {
    Contacto.belongsTo(models.Provincia, { foreignKey: 'provinciaId', as: 'provincia' });
  };

  return Contacto;
};