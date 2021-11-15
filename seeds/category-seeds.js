const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Tops & T-Shirts',
  },
  {
    category_name: 'Sweatshirts & Hoodies',
  },
  {
    category_name: 'Pants',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Jackets & Vests',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;