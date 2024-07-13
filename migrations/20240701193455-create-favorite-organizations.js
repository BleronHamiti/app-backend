"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("favoriteOrganizations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      volunteerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "volunteers", // This should match the table name defined in your Volunteer model
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      organizationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "organizations", // This should match the table name defined in your Organization model
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("favoriteOrganizations");
  },
};
