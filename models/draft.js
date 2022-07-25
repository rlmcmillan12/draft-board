'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Draft extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Draft.init(
    {
      name: DataTypes.STRING,
      style: DataTypes.STRING,
      abv: DataTypes.STRING,
      ibu: DataTypes.STRING,
      color: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Draft',
    }
  )
  return Draft
}
