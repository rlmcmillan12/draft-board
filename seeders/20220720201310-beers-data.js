'use strict'
const { faker } = require('@faker-js/faker/locale/en_US')

const LagerStyles = [
  'Czech Premium Pale Lager',
  'American Lager',
  'Czech Dark Lager',
  'Munich Helles',
  'Festbier',
  'German Pilsner',
  'Märzen',
  'Czech Premium Pale Lager',
  'Rauchbier',
  'Vienna Lager',
  'Schwarzbier',
  'Dopplebock',
  'Munich Dunkel',
  'Mexican Lager',
  'American Light Lager',
  'Kellerbier',
]
function getBeer() {
  return {
    name: faker.commerce.productName(),
    style: faker.helpers.arrayElement(LagerStyles),
    abv: faker.datatype.number({ min: 0.01, max: 12, precision: 0.1 }),
    ibu: faker.datatype.number({ min: 1, max: 100 }),
    color: faker.datatype.number({ min: 0.01, max: 40, precision: 0.1 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}

module.exports = {
  async up(queryInterface, Sequelize) {
    const beers = [...new Array(80)].map(getBeer)
    await queryInterface.bulkInsert('Beers', beers)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
