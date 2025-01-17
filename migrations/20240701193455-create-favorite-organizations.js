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
          model: "volunteers",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        // Explicitly define the foreign key name to avoid duplication
        name: "fk_favoriteOrganizations_volunteerId"
      },
      organizationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "organizations",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        // Explicitly define the foreign key name to avoid duplication
        name: "fk_favoriteOrganizations_organizationId"
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
