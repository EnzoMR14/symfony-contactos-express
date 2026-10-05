module.exports = (sequelize, DataTypes) => {
  const Provincia = sequelize.define('Provincia', {
    nombre: { type: DataTypes.STRING(100), allowNull: false },
  }, { tableName: 'provincias' });

  Provincia.associate = (models) => {
    Provincia.hasMany(models.Contacto, { foreignKey: 'provinciaId', as: 'contactos' });
  };

  return Provincia;
};