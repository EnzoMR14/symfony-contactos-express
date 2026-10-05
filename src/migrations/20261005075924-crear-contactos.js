'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contactos', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      nombre: { type: Sequelize.STRING(255), allowNull: false },
      telefono: { type: Sequelize.STRING(15), allowNull: false },
      email: { type: Sequelize.STRING(255), allowNull: false },
      provinciaId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'provincias', key: 'id' },
        onDelete: 'SET NULL',
      },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('contactos');
  },
};