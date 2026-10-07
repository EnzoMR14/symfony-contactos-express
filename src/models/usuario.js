module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Usuario', {
    nombre:   { type: DataTypes.STRING(100), allowNull: false },
    email:    { type: DataTypes.STRING(180), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(255), allowNull: false },
    rol:      { type: DataTypes.STRING(20), allowNull: false, defaultValue: 'ROLE_USER' },
  }, { tableName: 'usuarios' });
};