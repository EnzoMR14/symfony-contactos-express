'use strict';

module.exports = {
  async up(queryInterface) {
    const now = new Date();
    await queryInterface.bulkInsert('contactos', [
      { nombre: 'Pedro', telefono: '9586425982289', email: 'pedroparamo@micuenta.com', provinciaId: 1, createdAt: now, updatedAt: now },
      { nombre: 'Juan', telefono: '8866599', email: 'juanito265@gserver.com', provinciaId: 2, createdAt: now, updatedAt: now },
      { nombre: 'María', telefono: '600123456', email: 'maria2022@gserver.com', provinciaId: 1, createdAt: now, updatedAt: now },
      { nombre: 'Elena', telefono: '611987654', email: 'elena89854@gserver.com', provinciaId: null, createdAt: now, updatedAt: now },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('contactos', null, {});
  },
};