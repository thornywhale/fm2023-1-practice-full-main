'use strict';

const { Model } = require('sequelize');
const { CONTEST_TYPES, CONTEST_STATUSES } = require('../constants');

module.exports = (sequelize, DataTypes) => {
  class Contest extends Model {
    static associate(models) {
      Contest.belongsTo(models.User, { foreignKey: 'userId', sourceKey: 'id' });
      Contest.hasMany(models.Offer, { foreignKey: 'offerId', targetKey: 'id' });
    }
  }
  Contest.init(
    {
      orderId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      contestType: {
        allowNull: false,
        type: DataTypes.ENUM(...Object.values(CONTEST_TYPES)),
      },
      fileName: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      originalFileName: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      title: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      typeOfName: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      industry: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      focusOfWork: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      targetCustomer: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      styleName: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      nameVenture: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      typeOfTagline: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      brandStyle: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.ENUM(...Object.values(CONTEST_STATUSES)),
        allowNull: false,
      },
      prize: {
        allowNull: false,
        type: DataTypes.DECIMAL,
      },
      priority: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Contest',
      timestamps: true,
    }
  );
  return Contest;
};
