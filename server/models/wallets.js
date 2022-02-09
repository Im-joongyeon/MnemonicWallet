'use strict';
const { Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wallets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  wallets.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    mnemonic: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    privateKey: DataTypes.STRING,
    publicKey: DataTypes.STRING,
  },
   {
    timestamps: false,
    sequelize,
    modelName: 'wallets',
  });
  return wallets;
};