'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'admin',
          password: 'admin',
          admin: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'manager',
          password: 'manager',
          admin: 'manager',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'user',
          password: 'user',
          admin: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  },
}
