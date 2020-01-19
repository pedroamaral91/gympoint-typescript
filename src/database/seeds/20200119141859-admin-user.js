"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Administrador",
          email: "admin@gympoint.com",
          password_hash: bcrypt.hashSync("123456", 8),
          administrator: true,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
