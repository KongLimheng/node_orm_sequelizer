'use strict';
const { Model } = require('sequelize');

/**
 * @typedef {import('sequelize').Sequelize} Sequelize
 * @typedef {import('sequelize/types')} DataTypes
 */

/**
 * @param {DataTypes} DataTypes
 * @param {Sequelize} sequelize
 */

module.exports = (sequelize, DataTypes) => {
  class ClassRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ClassRoom.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      class_name: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: 'ClassRoom',
      paranoid: true,
    }
  );
  return ClassRoom;
};
