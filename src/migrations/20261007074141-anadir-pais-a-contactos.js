'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('contactos', 'paisId', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: 'paises', key: 'id' },
      onDelete: 'SET NULL',
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn('contactos', 'paisId');
  },
};