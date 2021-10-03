'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const data = [
      {
        name: 'Shift 1',
        dateShift: new Date(2021, 8, 14),
        startTime: "07:00",
        endTime: "13:00",
        startTimestamp: (new Date(2021, 8, 14, 7)).getTime()/1000,
        endTimestamp: (new Date(2021, 8, 14, 13)).getTime()/1000,
        isPublished: false,
        UserId: 1
      },
      {
        name: 'Shift 2',
        dateShift: new Date(2021, 8, 16),
        startTime: "10:00",
        endTime: "18:00",
        startTimestamp: (new Date(2021, 8, 16, 10)).getTime()/1000,
        endTimestamp: (new Date(2021, 8, 16, 18)).getTime()/1000,
        isPublished: false,
        UserId: 1
      },
      {
        name: 'Shift 3',
        dateShift: new Date(2021, 8, 17),
        startTime: "07:00",
        endTime: "13:00",
        startTimestamp: (new Date(2021, 8, 17, 7)).getTime()/1000,
        endTimestamp: (new Date(2021, 8, 17, 13)).getTime()/1000,
        isPublished: false,
        UserId: 1
      }
    ]

    // add createdAt and updatedAd
    data.forEach(shift => {
      shift.createdAt = new Date(),
      shift.updatedAt = new Date()
    });
    
    await queryInterface.bulkInsert('Shifts', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('Shifts', null, {});
  }
};
