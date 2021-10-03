'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Shifts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      dateShift: {
        type: Sequelize.DATE
      },
      startTime: {
        type: Sequelize.STRING
      },
      endTime: {
        type: Sequelize.STRING
      },
      startTimestamp: {
        type: Sequelize.INTEGER
      },
      endTimestamp: {
        type: Sequelize.INTEGER
      },
      isPublished: {
        type: Sequelize.BOOLEAN
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Shifts');
  }
};