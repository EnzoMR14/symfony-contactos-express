'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuarios', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      nombre: { type: Sequelize.STRING(100), allowNull: false },
      email: { type: Sequelize.STRING(180), allowNull: false, unique: true },
      password: { type: Sequelize.STRING(255), allowNull: false },
      rol: { type: Sequelize.STRING(20), allowNull: false, defaultValue: 'ROLE_USER' },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('usuarios');
  },
};