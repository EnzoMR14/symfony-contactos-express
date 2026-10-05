'use strict';

module.exports = {
  async up(queryInterface) {
    const now = new Date();
    await queryInterface.bulkInsert(
      'provincias',
      ['Valencia', 'Alicante', 'Castellón', 'Madrid', 'Barcelona'].map((nombre) => ({
        nombre, createdAt: now, updatedAt: now,
      }))
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('provincias', null, {});
  },
};