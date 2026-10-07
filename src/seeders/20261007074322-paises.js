'use strict';

module.exports = {
  async up(queryInterface) {
    const now = new Date();
    await queryInterface.bulkInsert(
      'paises',
      ['España', 'Francia', 'Portugal', 'Italia', 'Alemania', 'Reino Unido', 'Estados Unidos', 'México', 'Argentina']
        .map((nombre) => ({ nombre, createdAt: now, updatedAt: now }))
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('paises', null, {});
  },
};