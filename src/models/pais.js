module.exports = (sequelize, DataTypes) => {
  const Pais = sequelize.define('Pais', {
    nombre: { type: DataTypes.STRING(100), allowNull: false },
  }, { tableName: 'paises' });

  Pais.associate = (models) => {
    Pais.hasMany(models.Contacto, { foreignKey: 'paisId', as: 'contactos' });
  };

  return Pais;
};