const sequelize = require('../config/connection.js')
// importing parts of the sequelize library 
const {Model, DataTypes } = require('sequelize')
// initializing the product model/ table and extending sequelize model class
class Product extends Model {}
// set up rules and fields for the product model
Product.init(
{
id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
},
product_name: {
    type: DataTypes.STRING,
    allowNull: false,
},
price: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false,
    validate: {
        isDecimal: true,
    },

},
category_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
        model: 'category',
        key: 'id',
    }
}
}, 
{
sequelize,
timestamps: false,
freezeTableName: true,
underscores: true,
modelName: 'product'
}
)

module.exports = Product;