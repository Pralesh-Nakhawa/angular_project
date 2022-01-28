'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('Users', [{
      name: 'Gorden',
        address: 'Bombay',
        mobile:'1234',
        email:'ppp@mm.cc',
        password:'1234',
        createdAt:new Date(),
        updatedAt:new Date()
     },
     {
        name: 'Gord',
        address: 'Bombay',
        mobile:'1234',
        email:'nnn@mm.cc',
        password:'1234',
        createdAt:new Date(),
        updatedAt:new Date()
      
      }], {});
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
