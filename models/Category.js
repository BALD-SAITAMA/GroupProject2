const sequelize = require('../config/connection.js')
const {Model, DataTypes } = require('sequelize')

class Category extends Model {}

Category.init(
{
id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
},
category_name: {
    type: DataTypes.STRING,
    allowNull: false,
}
}, 
{
sequelize,
timestamps: false,
freezeTableName: true,
underscores: true,
modelName: 'category'
}
)

module.exports = Category;