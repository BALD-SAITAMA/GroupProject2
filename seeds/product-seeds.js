const { Product } = require('../models');
const mensPantSize = [
  "28W x 28L",
"28W x 30L",
"28W x 32L",
"29W x 28L",
"29W x 29L",
"29W x 30L",
"29W x 32L",
"29W x 34L",
"30W x 28L",
"30W x 29L",
"30W x 30L",
"30W x 32L",
"30W x 34L",
"31W x 28L",
"31W x 29L",
"31W x 30L",
"31W x 32L",
"31W x 34L",
"32W x 28L",
"32W x 29L",
"32W x 30L",
"32W x 31L",
"32W x 32L",
"32W x 33L",
"32W x 34L",
"33W x 28L",
"33W x 29L",
"33W x 30L",
"33W x 32L",
"33W x 34L",
"34W x 28L",
"34W x 29L",
"34W x 30L",
"34W x 31L",
"34W x 32L",
"34W x 33L",
"34W x 34L",
"35W x 28L",
"35W x 29L",
"35W x 30L",
"35W x 32L",
"35W x 34L",
"36W x 28L",
"36W x 29L",
"36W x 30L",
"36W x 31L",
"36W x 32L",
"36W x 33L",
"36W x 34L",
"38W x 28L",
"38W x 29L",
"38W x 30L",
"38W x 32L",
"38W x 34L",
"40W x 28L",
"40W x 29L",
"40W x 30L",
"40W x 32L",
"40W x 34L",
"42W x 28L",
"42W x 29L",
"42W x 30L",
"42W x 32L",
"42W x 34L"
];
const womensPantSize = [
  "24 Short",
"24 Regular",
"24 Long",
"24W x 32L",
"25 Short",
"25 Regular",
"25 Long",
"25W x 32L",
"26 Short",
"26 Regular",
"26 Long",
"26W x 30L",
"27 Short",
"27 Regular",
"27 Long",
"28 Short",
"28 Regular",
"28 Long",
"29 Short",
"29 Regular",
"29 Long",
"29W x 28L",
"29W x 30L",
"30 Short",
"30 Regular",
"30 Long",
"31 Short",
"31 Regular",
"31 Long",
"32 Short",
"32 Regular",
"32 Long",
"33 Short",
"33 Regular",
"33 Long",
"34 Short",
"34 Regular",
"34 Long",
"34W x 30L",
"36 Short",
"36 Regular",
"38 Short",
"38 Regular",
"40 Short",
"40 Regular",
"42 Short",
"42 Regular",
"44 Short",
"44 Regular",
"46 Short",
"46 Regular",

];

const productData = [

  //Men's Tops & T-Shirts
  {
    product_name: "Men's 2-Pack Regular-Fit Short-Sleeve Crewneck Pocket T-Shirt",
    price: 0.01,
    stock: 14,
    category_id: 1,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "01-Men's 2-Pack Regular-Fit Short-Sleeve Crewneck Pocket T-Shirt.jpg",
    parentFolder: "M-Tops & T-Shirts",
    gender: "M"
  },
  {
    product_name: "Men's Crew T-Shirts, Multipack",
    price: 22.00,
    stock: 6,
    category_id: 1,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "02-Men's Crew T-Shirts, Multipack.jpg",
    parentFolder: "M-Tops & T-Shirts",
    gender: "M"
  },
  {
    product_name: "Men's Heavy Cotton T-Shirt, Style G5000, 2-Pack",
    price: 17.95,
    stock: 17,
    category_id: 1,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "03-Men's Heavy Cotton T-Shirt, Style G5000, 2-Pack.jpg",
    parentFolder: "M-Tops & T-Shirts",
    gender: "M"
  },
  {
    product_name: "Men's Short Sleeve Pocket T-Shirt",
    price: 12.44,
    stock: 4,
    category_id: 1,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "04-Men's Short Sleeve Pocket T-Shirt.jpg",
    parentFolder: "M-Tops & T-Shirts",
    gender: "M"
  },
  {
    product_name: "Men's Crew T-Shirts, Multipack",
    price: 27.88,
    stock: 8,
    category_id: 1,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "05-Men's Crew T-Shirts, Multipack.jpg",
    parentFolder: "M-Tops & T-Shirts",
    gender: "M"
  },
  {
    product_name: "4 Pack Men's Dry-Fit Moisture Wicking Performance Long Sleeve T-Shirt",
    price: 18.40,
    stock: 6,
    category_id: 1,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "06-4 Pack Men's Dry-Fit Moisture Wicking Performance Long Sleeve T-Shirt, UV Sun Protection Outdoor Active Athletic Crew Top.jpg",
    parentFolder: "M-Tops & T-Shirts",
    gender: "M"
  },
  {
    product_name: "Men's 2-Pack Regular-Fit Short-Sleeve Crewneck Pocket T-Shirt",
    price: 15.99,
    stock: 4,
    category_id: 1,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "07-Men's 2-Pack Regular-Fit Short-Sleeve Crewneck Pocket T-Shirt.jpg",
    parentFolder: "M-Tops & T-Shirts",
    gender: "M"
  },
  {
    product_name: "Men's Classic Jersey T-shirt",
    price: 13.95,
    stock: 6,
    category_id: 1,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "08-Men's Classic Jersey T-shirt.jpg",
    parentFolder: "M-Tops & T-Shirts",
    gender: "M"
  },
  {
    product_name: "Men's Dry Tee",
    price: 11.95,
    stock: 6,
    category_id: 1,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "09-Men's Dry Tee.jpg",
    parentFolder: "M-Tops & T-Shirts",
    gender: "M"
  },
  {
    product_name: "Men’s Thistletown Park Raglan Tee",
    price: 9.95,
    stock: 19,
    category_id: 1,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "10-Men’s Thistletown Park Raglan Tee.jpg",
    parentFolder: "M-Tops & T-Shirts",
    gender: "M"
  },
  {
    product_name: "Men's Crew Neck T-Shirt",
    price: 17.88,
    stock: 4,
    category_id: 1,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "11-Men's Crew Neck T-Shirt.jpg",
    parentFolder: "M-Tops & T-Shirts",
    gender: "M"
  },
  {
    product_name: "Sport Men's Heathered Performance T-Shirt",
    price: 15.75,
    stock: 5,
    category_id: 1,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "12-Sport Men's Heathered Performance T-Shirt.jpg",
    parentFolder: "M-Tops & T-Shirts",
    gender: "M"
  },
  {
    product_name: "Men's Venice Burnout Notch Neck Tee Shirt",
    price: 17.89,
    stock: 28,
    category_id: 1,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "13-Men's Venice Burnout Notch Neck Tee Shirt.jpg",
    parentFolder: "M-Tops & T-Shirts",
    gender: "M"
  },
  {
    product_name: "Men's DryBlend Classic T-Shirt",
    price: 14.77,
    stock: 15,
    category_id: 1,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "14-Men's DryBlend Classic T-Shirt.jpg",
    parentFolder: "M-Tops & T-Shirts",
    gender: "M"
  },
  {
    product_name: "Men's Thistletown Park Crew",
    price: 7.99,
    stock: 9,
    category_id: 1,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "15-Men's Thistletown Park Crew.jpg",
    parentFolder: "M-Tops & T-Shirts",
    gender: "M"
  },
  {
    product_name: "Men's Sportstyle Logo Short Sleeve T-Shirt",
    price: 18.00,
    stock: 12,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "16-Men's Sportstyle Logo Short Sleeve T-Shirt.jpg",
    parentFolder: "M-Tops & T-Shirts",
    gender: "M"
    },
    {
    product_name: "Men's Heavy Cotton Adult Tee",
    price: 11.99,
    stock: 14,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "17-Men's Heavy Cotton Adult Tee.jpg",
    parentFolder: "M-Tops & T-Shirts",
    gender: "M"
    },
    {
    product_name: "Men's Crew T-Shirts, Multipack",
    price: 17.99,
    stock: 16,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "18-Men's Crew T-Shirts, Multipack.jpg",
    parentFolder: "M-Tops & T-Shirts",
    gender: "M"
    },
    {
    product_name: "Men's Tagless Cotton Crew Neck Undershirts, Available in Multiple Packs",
    price: 14.59,
    stock: 2,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "19-Men's Tagless Cotton Crew Neck Undershirts, Available in Multiple Packs.jpg",
    parentFolder: "M-Tops & T-Shirts",
    gender: "M"
    },
    {
    product_name: "Men's Crew T-Shirts",
    price: 20.99,
    stock: 6,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "20-Men's Crew T-Shirts.jpg",
    parentFolder: "M-Tops & T-Shirts",
    gender: "M"
    },
    

  // {
  //   product_name: "Hoodie",
  //   price: 24.99,
  //   stock: 14,
  //   category_id: 2,
  //   size: ["S", "M", "L", "XL", "XXL"],
  //   filename: "",
  //   gender: "M"
  // },

  //Men's sweatshirts and hoodies 
  {
    product_name: "Men's EcoSmart Sweatshirt",
    price: 24.99,
    stock: 14,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "01-Men's EcoSmart Sweatshirt.jpg",
    parentFolder: "M-Sweatshirts & Hoodies",
    gender: "M"
  },
  {
    product_name: "Men's Pullover EcoSmart Hooded Sweatshirt",
    price: 20.99,
    stock: 8,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "02-Men's Pullover EcoSmart Hooded Sweatshirt.jpg",
    parentFolder: "M-Sweatshirts & Hoodies",
    gender: "M"
  },
  {
    product_name: "Men's Comfortwash Garment Dyed Sweatshirt",
    price: 29.99,
    stock: 10,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "03-Men's Comfortwash Garment Dyed Sweatshirt.jpg",
    parentFolder: "M-Sweatshirts & Hoodies",
    gender: "M"
  },
  {
    product_name: "Mens Novelty Color Block Hoodies Cozy Sport Outwear",
    price: 33.99,
    stock: 4,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "04-Mens Novelty Color Block Hoodies Cozy Sport Outwear.jpg",
    parentFolder: "M-Sweatshirts & Hoodies",
    gender: "M"
  },
  {
    product_name: "Men’s Ultimate Cotton Heavyweight Pullover Hoodie Sweatshirt",
    price: 44.99,
    stock: 22,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "05-Men’s Ultimate Cotton Heavyweight Pullover Hoodie Sweatshirt.jpg",
    parentFolder: "M-Sweatshirts & Hoodies",
    gender: "M"
  },
  {
    product_name: "Men's Authentic Originals Sueded Pullover Hoodie",
    price: 22.59,
    stock: 19,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "06-Men's Authentic Originals Sueded Pullover Hoodie.jpg",
    parentFolder: "M-Sweatshirts & Hoodies",
    gender: "M"
  },
  {
    product_name: "Men's Long Sleeve T-Shirt Hoodie, Script Logo",
    price: 29.79,
    stock: 21,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "07-Men's Long Sleeve T-Shirt Hoodie, Script Logo.jpg",
    parentFolder: "M-Sweatshirts & Hoodies",
    gender: "M"
  },
  {
    product_name: "Men's Comfortwash Garment Dyed Hoodie Sweatshirt",
    price: 39.99,
    stock: 4,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "08-Men's Comfortwash Garment Dyed Hoodie Sweatshirt.jpg",
    parentFolder: "M-Sweatshirts & Hoodies",
    gender: "M"
  },
  {
    product_name: "Men's Force Relaxed Fit Midweight Quarter-Zip Mock-Neck Sweatshirt",
    price: 26.56,
    stock: 6,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "09-Men's Force Relaxed Fit Midweight Quarter-Zip Mock-Neck Sweatshirt.jpg",
    parentFolder: "M-Sweatshirts & Hoodies",
    gender: "M"
  },
  {
    product_name: "Men's Powerblend Fleece Hoodie, C Logo",
    price: 40.99,
    stock: 1,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "10-Men's Powerblend Fleece Hoodie, C Logo.jpg",
    parentFolder: "M-Sweatshirts & Hoodies",
    gender: "M"
  },
  {
    product_name: "Hoodie, Big and Tall Hoodies for Men, Mens Hoodies, Zip Up Hoodie",
    price: 37.99,
    stock: 9,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "11-Hoodie, Big and Tall Hoodies for Men, Mens Hoodies, Zip Up Hoodie.jpg",
    parentFolder: "M-Sweatshirts & Hoodies",
    gender: "M"
  },
  {
    product_name: "Men's Pullover Fleece Hoodie",
    price: 24.99,
    stock: 25,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "12-Men's Pullover Fleece Hoodie.jpg",
    parentFolder: "M-Sweatshirts & Hoodies",
    gender: "M"
  },
  {
    product_name: "Men's Midweight Hooded Sweatshirt",
    price: 28.75,
    stock: 11,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "13-Men's Midweight Hooded Sweatshirt.jpg",
    parentFolder: "M-Sweatshirts & Hoodies",
    gender: "M"
  },
  {
    product_name: "Men's Authentic Originals Sueded Pullover Hoodie",
    price: 24.99,
    stock: 14,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "14-Men's Authentic Originals Sueded Pullover Hoodie.jpg",
    parentFolder: "M-Sweatshirts & Hoodies",
    gender: "M"
  },
  {
    product_name: "Men's Eversoft Fleece Sweatshirts & Hoodies",
    price: 28.99,
    stock: 17,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "15-Men's Eversoft Fleece Sweatshirts & Hoodies.jpg",
    parentFolder: "M-Sweatshirts & Hoodies",
    gender: "M"
  },

//Men's shorts
  {
    product_name: "5 PackMen's Dry-Fit Sweat Resistant Active Athletic Performance Shorts",
    price: 10.99,
    stock: 14,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "01-5 PackMen's Dry-Fit Sweat Resistant Active Athletic Performance Shorts.jpg",
    parentFolder: "M-Shorts",
    gender: "M"
  },
  {
    product_name: "Men's Raid 2.0 Workout Gym Shorts",
    price: 8.99,
    stock: 1,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "02-Men's Raid 2.0 Workout Gym Shorts.jpg",
    parentFolder: "M-Shorts",
    gender: "M"
  },
  {
    product_name: "Men’s Linen Shorts Casual Drawstring Summer Beach Shorts",
    price: 15.99,
    stock: 22,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "03-Men’s Linen Shorts Casual Drawstring Summer Beach Shorts.jpg",
    parentFolder: "M-Shorts",
    gender: "M"
  },
  {
    product_name: "Men's Perfect Classic Fit 8 Shorts",
    price: 19.99,
    stock: 12,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "04-Men's Perfect Classic Fit 8 Shorts.jpg",
    parentFolder: "M-Shorts",
    gender: "M"
  },
  {
    product_name: "Flex Men's Woven Training Shorts",
    price: 16.99,
    stock: 7,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "05-Flex Men's Woven Training Shorts.jpg",
    parentFolder: "M-Shorts",
    gender: "M"
  },
  {
    product_name: "Men's Dry Training Shorts",
    price: 12.50,
    stock: 19,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "06-Men's Dry Training Shorts.jpg",
    parentFolder: "M-Shorts",
    gender: "M"
  },
  {
    product_name: "Men's Mini Ripstop Cargo Short",
    price: 22.00,
    stock: 3,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "07-Men's Mini Ripstop Cargo Short.jpg",
    parentFolder: "M-Shorts",
    gender: "M"
  },
  {
    product_name: "mens Linen Casual Classic Fit Short",
    price: 16.99,
    stock: 16,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "08-mens Linen Casual Classic Fit Short.jpg",
    parentFolder: "M-Shorts",
    gender: "M"
  },
  {
    product_name: "Men's Workout Stretch Shorts Drawstring Elastic Zipper Pockets",
    price: 20.99,
    stock: 5,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "09-Men's Workout Stretch Shorts Drawstring Elastic Zipper Pockets.jpg",
    parentFolder: "M-Shorts",
    gender: "M"
  },
  {
    product_name: "Men's Clima Tech Short",
    price: 18.99,
    stock: 1,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "10-Men's Clima Tech Short.jpg",
    parentFolder: "M-Shorts",
    gender: "M"
  },
  {
    product_name: "Men's Rival Fleece Big Logo Shorts",
    price: 16.99,
    stock: 7,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "11-Men's Rival Fleece Big Logo Shorts.jpg",
    parentFolder: "M-Shorts",
    gender: "M"
  },
  {
    product_name: "Men's Condivo 20 Shorts",
    price: 13.55,
    stock: 0,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "12-Men's Condivo 20 Shorts.jpg",
    parentFolder: "M-Shorts",
    gender: "M"
  },
  {
    product_name: "Golf Men's Ultimate 365 Short",
    price: 17.99,
    stock: 13,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "13-Golf Men's Ultimate 365 Short.jpg",
    parentFolder: "M-Shorts",
    gender: "M"
  },
  {
    product_name: "Men's Slim Jean Shorts",
    price: 15.99,
    stock: 1,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "14-Men's Slim Jean Shorts.jpg",
    parentFolder: "M-Shorts",
    gender: "M"
  },
  {
    product_name: "mens Canvas Utility Hiker Short",
    price: 19.99,
    stock: 16,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "15-mens Canvas Utility Hiker Short.jpg",
    parentFolder: "M-Shorts",
    gender: "M"
  },

//Men's Jackets and Vests
  {
    product_name: "Men's Full-Zip Polar Fleece Jacket",
    price: 44.99,
    stock: 14,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "01-Men's Full-Zip Polar Fleece Jacket.jpg",
    parentFolder: "M-Jackets & Vests",
    gender: "M"
  },
  {
    product_name: "Men's Long Sleeve Quilted Lined Flannel Shirt Jacket with Hood",
    price: 34.99,
    stock: 1,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "02-Men's Long Sleeve Quilted Lined Flannel Shirt Jacket with Hood.jpg",
    parentFolder: "M-Jackets & Vests",
    gender: "M"
  },
  {
    product_name: "Men's Lightweight Water-Resistant Packable Puffer Jacket",
    price: 43.59,
    stock: 12,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "03-Men's Lightweight Water-Resistant Packable Puffer Jacket.jpg",
    parentFolder: "M-Jackets & Vests",
    gender: "M"
  },
  {
    product_name: "Men's Lightweight Water-Resistant Packable Puffer Jacket",
    price: 40.79,
    stock: 17,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "04-Men's Lightweight Water-Resistant Packable Puffer Jacket.jpg",
    parentFolder: "M-Jackets & Vests",
    gender: "M"
  },
  {
    product_name: "Men's Highland Washed Hooded Jacket",
    price: 38.99,
    stock: 18,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "05-Men's Highland Washed Hooded Jacket.jpg",
    parentFolder: "M-Jackets & Vests",
    gender: "M"
  },
  {
    product_name: "Men's Packable Jacket",
    price: 29.99,
    stock: 13,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "06-Men's Packable Jacket.jpg",
    parentFolder: "M-Jackets & Vests",
    gender: "M"
  },
  {
    product_name: "Men's Insulated Eisenhower Front-Zip Jacket",
    price: 37.59,
    stock: 6,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "07-Men's Insulated Eisenhower Front-Zip Jacket.jpg",
    parentFolder: "M-Jackets & Vests",
    gender: "M"
  },
  {
    product_name: "Men’s Thermoball Eco Insulated Jacket",
    price: 49.99,
    stock: 10,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "08-Men’s Thermoball Eco Insulated Jacket.jpg",
    parentFolder: "M-Jackets & Vests",
    gender: "M"
  },
  {
    product_name: "Men's Tempo Softshell Jacket",
    price: 49.39,
    stock: 15,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "09-Men's Tempo Softshell Jacket.jpg",
    parentFolder: "M-Jackets & Vests",
    gender: "M"
  },
  {
    product_name: "Men's Steens Mountain Printed Jacket",
    price: 30.00,
    stock: 17,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "10-Men's Steens Mountain Printed Jacket.jpg",
    parentFolder: "M-Jackets & Vests",
    gender: "M"
  },
  {
    product_name: "Men's Mt. Washington Insulated Jacket",
    price: 34.99,
    stock: 12,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "11-Men's Mt. Washington Insulated Jacket.jpg",
    parentFolder: "M-Jackets & Vests",
    gender: "M"
  },
  {
    product_name: "Men's Full Swing Loose Fit Washed Duck Fleece-Lined Jacket",
    price: 74.99,
    stock: 11,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "12-Men's Full Swing Loose Fit Washed Duck Fleece-Lined Jacket.jpg",
    parentFolder: "M-Jackets & Vests",
    gender: "M"
  },
  {
    product_name: "Men's Full Swing Relaxed Fit Ripstop Insulated Jacket",
    price: 46.99,
    stock: 13,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "13-Men's Full Swing Relaxed Fit Ripstop Insulated Jacket.jpg",
    parentFolder: "M-Jackets & Vests",
    gender: "M"
  },
  {
    product_name: "Men's Soft Fleece Full Zip Jacket",
    price: 28.99,
    stock: 10,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "14-Men's Soft Fleece Full Zip Jacket.jpg",
    parentFolder: "M-Jackets & Vests",
    gender: "M"
  },
  {
    product_name: "Men's Hooded Polar Fleece Jacket",
    price: 36.99,
    stock: 19,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "15-Men's Hooded Polar Fleece Jacket.jpg",
    parentFolder: "M-Jackets & Vests",
    gender: "M"
  },

  //Mens pants
  {
    product_name: "Men's Athletic-fit Casual Stretch Khaki Pant",
    price: 44.99,
    stock: 14,
    category_id: 3,
    size: mensPantSize,
    filename: "01-Men's Athletic-fit Casual Stretch Khaki Pant.jpg",
    parentFolder: "M-Pants",
    gender: "M"
  },
  {
    product_name: "Men's Performance Series Extreme Motion Straight Fit Tapered Leg Jean",
    price: 24.99,
    stock: 8,
    category_id: 3,
    size: mensPantSize,
    filename: "02-Men's Performance Series Extreme Motion Straight Fit Tapered Leg Jean.jpg",
    parentFolder: "M-Pants",
    gender: "M"
  },
  {
    product_name: "Men's Original 874 Work Pant",
    price: 19.95,
    stock: 3,
    category_id: 3,
    size: mensPantSize,
    filename: "03-Men's Original 874 Work Pant.jpg",
    parentFolder: "M-Pants",
    gender: "M"
  },
  {
    product_name: "Men's Performance Series Extreme Motion Straight Fit Tapered Leg Jean",
    price: 28.99,
    stock: 7,
    category_id: 3,
    size: mensPantSize,
    filename: "04-Men's Performance Series Extreme Motion Straight Fit Tapered Leg Jean.jpg",
    parentFolder: "M-Pants",
    gender: "M"
  },
  {
    product_name: "Men's EcoSmart Open Leg Pant with Pockets",
    price: 34.55,
    stock: 9,
    category_id: 3,
    size: mensPantSize,
    filename: "05-Men's EcoSmart Open Leg Pant with Pockets.jpg",
    parentFolder: "M-Pants",
    gender: "M"
  },
  {
    product_name: "Men's Jersey Pant",
    price: 36.99,
    stock: 18,
    category_id: 3,
    size: mensPantSize,
    filename: "06-Men's Jersey Pant.jpg",
    parentFolder: "M-Pants",
    gender: "M"
  },
  {
    product_name: "Men's Sofspun Fleece Open Bottom Sweatpants",
    price: 32.99,
    stock: 6,
    category_id: 3,
    size: mensPantSize,
    filename: "07-Men's Sofspun Fleece Open Bottom Sweatpants.jpg",
    parentFolder: "M-Pants",
    gender: "M"
  },
  {
    product_name: "Men's Armour Fleece Pants",
    price: 57.99,
    stock: 17,
    category_id: 3,
    size: mensPantSize,
    filename: "08-Men's Armour Fleece Pants.jpg",
    parentFolder: "M-Pants",
    gender: "M"
  },
  {
    product_name: "Men's Active Basic Jogger Fleece Pants",
    price: 44.99,
    stock: 14,
    category_id: 3,
    size: mensPantSize,
    filename: "09-Men's Active Basic Jogger Fleece Pants.jpg",
    parentFolder: "M-Pants",
    gender: "M"
  },
  {
    product_name: "Men's Slim-Fit Casual Stretch Khaki",
    price: 22.99,
    stock: 14,
    category_id: 3,
    size: mensPantSize,
    filename: "10-Men's Slim-Fit Casual Stretch Khaki.jpg",
    parentFolder: "M-Pants",
    gender: "M"
  },
  {
    product_name: "Men's Slim-fit Stretch Golf Pant",
    price: 26.99,
    stock: 6,
    category_id: 3,
    size: mensPantSize,
    filename: "11-Men's Slim-fit Stretch Golf Pant.jpg",
    parentFolder: "M-Pants",
    gender: "M"
  },
  {
    product_name: "Men's Slim-fit Wrinkle-Resistant Flat-Front Chino Pant",
    price: 31.99,
    stock: 3,
    category_id: 3,
    size: mensPantSize,
    filename: "12-Men's Slim-fit Wrinkle-Resistant Flat-Front Chino Pant.jpg",
    parentFolder: "M-Pants",
    gender: "M"
  },
  {
    product_name: "Sport Men's X-Temp Performance Training Pant with Pockets",
    price: 29.99,
    stock: 8,
    category_id: 3,
    size: mensPantSize,
    filename: "13-Sport Men's X-Temp Performance Training Pant with Pockets.jpg",
    parentFolder: "M-Pants",
    gender: "M"
  },
  {
    product_name: "Men's Skinny-fit Casual Stretch Khaki Pant",
    price: 39.99,
    stock: 1,
    category_id: 3,
    size: mensPantSize,
    filename: "14-Men's Skinny-fit Casual Stretch Khaki Pant.jpg",
    parentFolder: "M-Pants",
    gender: "M"
  },
  {
    product_name: "Men's Classic-fit Wrinkle-Resistant Flat-Front Chino Pant",
    price: 40.99,
    stock: 5,
    category_id: 3,
    size: mensPantSize,
    filename: "15-Men's Classic-fit Wrinkle-Resistant Flat-Front Chino Pant.jpg",
    parentFolder: "M-Pants",
    gender: "M"
  },




  //Women's Tshirts
  {
    product_name: "Women's T Shirts V Neck Tops Shorts Sleeve Tops Casual Tshirts",
    price: 11.99,
    stock: 15,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "01-Women's T Shirts V Neck Tops Shorts Sleeve Tops Casual Tshirts.jpg",
    parentFolder: "W-Tops & T-Shirts",
    gender: "W"
  },
  {
    product_name: "Women's 2-Pack Slim-Fit Short-Sleeve Crewneck T-Shirt",
    price: 8.99,
    stock: 44,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "02-Women's 2-Pack Slim-Fit Short-Sleeve Crewneck T-Shirt.jpg",
    parentFolder: "W-Tops & T-Shirts",
    gender: "W"
  },
    {
    product_name: "Women's Relaxed Supima Cotton Short Sleeve V-Neck T-Shirt",
    price: 14.00,
    stock: 14,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "03-Women's Relaxed Supima Cotton Short Sleeve V-Neck T-Shirt.jpg",
    parentFolder: "W-Tops & T-Shirts",
    gender: "W"
  },
  {
    product_name: "Women's Easy Comfort V-Neck Supersoft Stretch Cotton T-Shirt",
    price: 13.50,
    stock: 14,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "04-Women's Easy Comfort V-Neck Supersoft Stretch Cotton T-Shirt.jpg",
    parentFolder: "W-Tops & T-Shirts",
    gender: "W"
  },
  {
    product_name: "Women's Fashion Long Sleeve T-Shirt",
    price: 11.49,
    stock: 14,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "05-Women's Fashion Long Sleeve T-Shirt.jpg",
    parentFolder: "W-Tops & T-Shirts",
    gender: "W"
  },
  {
    product_name: "Women's Graphic Funny T Shirt Cute Tops Teen Girl Tees",
    price: 17.99,
    stock: 4,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "06-Women's Graphic Funny T Shirt Cute Tops Teen Girl Tees.jpg",
    parentFolder: "W-Tops & T-Shirts",
    gender: "W"
  },
  {
    product_name: "Women's Slim Fit Half Sleeve Square Neck T-Shirt",
    price: 16.59,
    stock: 7,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "07-Women's Slim Fit Half Sleeve Square Neck T-Shirt.jpg",
    parentFolder: "W-Tops & T-Shirts",
    gender: "W"
  },
  {
    product_name: "Women's 3 Pack Dry Fit Athletic Compression Long Sleeve T Shirt",
    price: 9.00,
    stock: 17,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "08-Women's 3 Pack Dry Fit Athletic Compression Long Sleeve T Shirt.jpg",
    parentFolder: "W-Tops & T-Shirts",
    gender: "W"
  },
  {
    product_name: "Women’s Perfect-T Short Sleeve T-shirt",
    price: 31.99,
    stock: 13,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "09-Women’s Perfect-T Short Sleeve T-shirt.jpg",
    parentFolder: "W-Tops & T-Shirts",
    gender: "W"
  },
  {
    product_name: "Womens Softstyle T-Shirt",
    price: 12.79,
    stock: 19,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "10-Womens Softstyle T-Shirt.jpg",
    parentFolder: "W-Tops & T-Shirts",
    gender: "W"
  },
  {
    product_name: "Women Cute Funny Graphic T Shirts",
    price: 11.99,
    stock: 1,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "11-Women Cute Funny Graphic T Shirts.jpg",
    parentFolder: "W-Tops & T-Shirts",
    gender: "W"
  },
  {
    product_name: "Women's Tech Short-Sleeve T-Shirt",
    price: 14.55,
    stock: 20,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "12-Women's Tech Short-Sleeve T-Shirt.jpg",
    parentFolder: "W-Tops & T-Shirts",
    gender: "W"
  },
  {
    product_name: "Women's Tech Twist T-Shirt",
    price: 19.99,
    stock: 19,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "13-Women's Tech Twist T-Shirt.jpg",
    parentFolder: "W-Tops & T-Shirts",
    gender: "W"
  },
  {
    product_name: "Womens T-Shirt Minnie Mouse Lean in Side Print",
    price: 10.99,
    stock: 4,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "14-Womens T-Shirt Minnie Mouse Lean in Side Print.jpg",
    parentFolder: "W-Tops & T-Shirts",
    gender: "W"
  },
  {
    product_name: "Women's Shirred V-Neck T-Shirt",
    price: 18.00,
    stock: 12,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "15-Women's Shirred V-Neck T-Shirt.jpg",
    parentFolder: "W-Tops & T-Shirts",
    gender: "W"
  },
  {
    product_name: "Women's X-Temp V-Neck T-Shirt",
    price: 11.99,
    stock: 14,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "16-Women's X-Temp V-Neck T-Shirt.jpg",
    parentFolder: "W-Tops & T-Shirts",
    gender: "W"
  },
  {
    product_name: "Women's Classic Fit Twist Sleeve Crew Neck T-Shirt",
    price: 17.99,
    stock: 16,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "17-Women's Classic Fit Twist Sleeve Crew Neck T-Shirt.jpg",
    parentFolder: "W-Tops & T-Shirts",
    gender: "W"
  },
  {
    product_name: "Women's Under Scrub Tee Crew Neck Long Sleeve T-Shirt",
    price: 14.59,
    stock: 2,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "18-Women's Under Scrub Tee Crew Neck Long Sleeve T-Shirt.jpg",
    parentFolder: "W-Tops & T-Shirts",
    gender: "W"
  },
  {
    product_name: "Mickey Mouse Pocket T-Shirt",
    price: 20.99,
    stock: 6,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "19-Mickey Mouse Pocket T-Shirt.jpg",
    parentFolder: "W-Tops & T-Shirts",
    gender: "W"
  },
  {
    product_name: "Women's Heavy Cotton T-Shirt, Style G5000L, 2-Pack",
    price: 19.99,
    stock: 8,
    category_id: 1,
    size: 'S, M, L, XL, XXL',
    filename: "20-Women's Heavy Cotton T-Shirt, Style G5000L, 2-Pack.jpg",
    parentFolder: "W-Tops & T-Shirts",
    gender: "W"
  },


  //Women's shorts
  {
    product_name: "Women's Parma 16 Shorts",
    price: 10.99,
    stock: 14,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "01-Women's Parma 16 Shorts.jpg",
    parentFolder: "W-Shorts",
    gender: "W"
  },
  {
    product_name: "Women's Play Up 3.0 Shorts",
    price: 8.99,
    stock: 1,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "02-Women's Play Up 3.0 Shorts.jpg",
    parentFolder: "W-Shorts",
    gender: "W" 
},
  {
    product_name: "Women's Studio Terry Dolphin Short",
    price: 15.99,
    stock: 22,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "03-Women's Studio Terry Dolphin Short.jpg",
    parentFolder: "W-Shorts",
    gender: "W"
  },
  {
    product_name: "Women's Mid Length Shorts",
    price: 19.99,
    stock: 12,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "04-Women's Mid Length Shorts.jpg",
    parentFolder: "W-Shorts",
    gender: "W"
  },
  {
    product_name: "Women's Jersey Short",
    price: 16.99,
    stock: 7,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "05-Women's Jersey Short.jpg",
    parentFolder: "W-Shorts",
    gender: "W"
  },
  {
    product_name: "Women's French Terry Bermuda Short",
    price: 12.50,
    stock: 19,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "06-Women's French Terry Bermuda Short.jpg",
    parentFolder: "W-Shorts",
    gender: "W"
  },
  {
    product_name: "Women's Mid Length Shorts",
    price: 22.00,
    stock: 3,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "07-Women's Mid Length Shorts.jpg",
    parentFolder: "W-Shorts",
    gender: "W"
  },
  {
    product_name: "Women's Stretch Performance Short",
    price: 16.99,
    stock: 16,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "08-Women's Stretch Performance Short.jpg",
    parentFolder: "W-Shorts",
    gender: "W"
  },
  {
    product_name:  "Women's Play Up Short 3.0 - Twist",
    price: 20.99,
    stock: 5,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "09-Women's Play Up Short 3.0 - Twist.jpg",
    parentFolder: "W-Shorts",
    gender: "W"
  },
  {
    product_name: "Women's Alphaskin Volleyball Shorts",
    price: 18.99,
    stock: 1,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "10-Women's Alphaskin Volleyball Shorts.jpg",
    parentFolder: "W-Shorts",
    gender: "W"
  },
  {
    product_name: "Women's Cotton Jersey Shorts",
    price: 16.99,
    stock: 7,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "11-Women's Cotton Jersey Shorts.jpg",
    parentFolder: "W-Shorts",
    gender: "W"
  },
  {
    product_name: "Women's Dry 10K Running Shorts",
    price: 13.55,
    stock: 0,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "12-Women's Dry 10K Running Shorts.jpg",
    parentFolder: "W-Shorts",
    gender: "W"
  },
  {
    product_name: "Women's Regular Fit Utility Chino Walkshort",
    price: 17.99,
    stock: 13,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "13-Women's Regular Fit Utility Chino Walkshort.jpg",
    parentFolder: "W-Shorts",
    gender: "W"
  },
  {
    product_name: "Women's Mesh Short",
    price: 15.99,
    stock: 1,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "14-Women's Mesh Short.jpg",
    parentFolder: "W-Shorts",
    gender: "W"
  },
  {
    product_name: "Women's Plus Cotton Jersey Pull-On Shorts",
    price: 19.99,
    stock: 16,
    category_id: 4,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "15-Women's Plus Cotton Jersey Pull-On Shorts.jpg",
    parentFolder: "W-Shorts",
    gender: "W"
  },


  //Women's sweatshirts
  {
    product_name: "Women's EcoSmart Crewneck Sweatshirt",
    price: 24.99,
    stock: 14,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "01-Women's EcoSmart Crewneck Sweatshirt.jpg",
    parentFolder: "W-Sweatshirts & Hoodies",
    gender: "W"
  },
  {
    product_name: "Women's Powerblend Crew, Screen Print Script",
    price: 20.99,
    stock: 8,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "02-Women's Powerblend Crew, Screen Print Script.jpg",
    parentFolder: "W-Sweatshirts & Hoodies",
    gender: "W"
  },
  {
    product_name: "Women's Benton Springs Half Snap Pullover",
    price: 29.99,
    stock: 10,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "03-Women's Benton Springs Half Snap Pullover.jpg",
    parentFolder: "W-Sweatshirts & Hoodies",
    gender: "W"
  },
  {
    product_name: "Women's Fleece Hooded Tunic Sweatshirt",
    price: 33.99,
    stock: 4,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "04-Women's Fleece Hooded Tunic Sweatshirt.jpg",
    parentFolder: "W-Sweatshirts & Hoodies",
    gender: "W"
  },
  {
    product_name: "Women's EcoSmart Full-Zip Hoodie Sweatshirt",
    price: 44.99,
    stock: 22,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "05-Women's EcoSmart Full-Zip Hoodie Sweatshirt.jpg",
    parentFolder: "W-Sweatshirts & Hoodies",
    gender: "W"
  },
  {
    product_name: "Women's Fleece Pullover Hoodie",
    price: 22.59,
    stock: 19,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "06-Women's Fleece Pullover Hoodie.jpg",
    parentFolder: "W-Sweatshirts & Hoodies",
    gender: "W"
  },
  {
    product_name: "Women's Regular Clarksburg Pullover Sweatshirt",
    price: 29.79,
    stock: 21,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "07-Women's Regular Clarksburg Pullover Sweatshirt.jpg",
    parentFolder: "W-Sweatshirts & Hoodies",
    gender: "W"
  },
  {
    product_name: "Sport Women's Performance Fleece Pullover Hoodie",
    price: 39.99,
    stock: 4,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "08-Sport Women's Performance Fleece Pullover Hoodie.jpg",
    parentFolder: "W-Sweatshirts & Hoodies",
    gender: "W"
  },
  {
    product_name: "Women's Plus Size Fleece Pullover Hoodie",
    price: 26.56,
    stock: 6,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "09-Women's Plus Size Fleece Pullover Hoodie.jpg",
    parentFolder: "W-Sweatshirts & Hoodies",
    gender: "W"
  },
  {
    product_name: "Active Women's Ultra Soft Quilted Cowl Neck Pullover Sweatshirt",
    price: 40.99,
    stock: 1,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "10-Active Women's Ultra Soft Quilted Cowl Neck Pullover Sweatshirt.jpg",
    parentFolder: "W-Sweatshirts & Hoodies",
    gender: "W"
  },
  {
    product_name: "Women's Reverse Weave Crew",
    price: 37.99,
    stock: 9,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "11-Women's Reverse Weave Crew.jpg",
    parentFolder: "W-Sweatshirts & Hoodies",
    gender: "W"
  },
  {
    product_name: "Women's Terry Cotton and Modal Tie Sleeve V-Neck Sweatshirt",
    price: 24.99,
    stock: 25,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "12-Women's Terry Cotton and Modal Tie Sleeve V-Neck Sweatshirt.jpg",
    parentFolder: "W-Sweatshirts & Hoodies",
    gender: "W"
  },
  {
    product_name: "Women's Kiko Oversized Crew Neck Sweatshirt",
    price: 28.75,
    stock: 11,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "13-Women's Kiko Oversized Crew Neck Sweatshirt.jpg",
    parentFolder: "W-Sweatshirts & Hoodies",
    gender: "W"
  },
  {
    product_name: "Women's Sport Performance Fleece Quarter Zip Pullover",
    price: 24.99,
    stock: 14,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "14-Women's Sport Performance Fleece Quarter Zip Pullover.jpg",
    parentFolder: "W-Sweatshirts & Hoodies",
    gender: "W"
  },
  {
    product_name: "Womens Team 19 Hoodie",
    price: 28.99,
    stock: 17,
    category_id: 2,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "15-Womens Team 19 Hoodie.jpg",
    parentFolder: "W-Sweatshirts & Hoodies",
    gender: "W"
  },


  //Women's jackets
  {
    product_name: "Women's Heavenly Hooded Jacket",
    price: 44.99,
    stock: 14,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "01-Women's Heavenly Hooded Jacket.jpg",
    parentFolder: "W-Jackets & Vests",
    gender: "W"
  },
  {
    product_name: "Women's Arcadia Ii Jacket",
    price: 34.99,
    stock: 1,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "02-Women's Arcadia Ii Jacket.jpg",
    parentFolder: "W-Jackets & Vests",
    gender: "W"
  },
  {
    product_name: "Women's Benton Springs Fleece Jacket",
    price: 43.59,
    stock: 12,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "03-Women's Benton Springs Fleece Jacket.jpg",
    parentFolder: "W-Jackets & Vests",
    gender: "W"
  },
  {
    product_name: "Women's Polar Fleece Lined Sherpa Full-Zip Jacket",
    price: 40.79,
    stock: 17,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "04-Women's Polar Fleece Lined Sherpa Full-Zip Jacket.jpg",
    parentFolder: "W-Jackets & Vests",
    gender: "W"
  },
  {
    product_name: "Women's Lightweight Water-Resistant Packable Puffer Coat",
    price: 38.99,
    stock: 18,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "05-Women's Lightweight Water-Resistant Packable Puffer Coat.jpg",
    parentFolder: "W-Jackets & Vests",
    gender: "W"
  },
  {
    product_name: "Women's Switchback Iii Jacket",
    price: 29.99,
    stock: 13,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "06-Women's Switchback Iii Jacket.jpg",
    parentFolder: "W-Jackets & Vests",
    gender: "W"
  },
  {
    product_name: "Women's Premium Original Trucker Jacket",
    price: 37.59,
    stock: 6,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "07-Women's Premium Original Trucker Jacket.jpg",
    parentFolder: "W-Jackets & Vests",
    gender: "W"
  },
  {
    product_name: "Women’s Osito Full Zip Fleece Jacket",
    price: 49.99,
    stock: 10,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "08-Women’s Osito Full Zip Fleece Jacket.jpg",
    parentFolder: "W-Jackets & Vests",
    gender: "W"
  },
  {
    product_name: "Women's Fire Side Ii Sherpa Full Zip",
    price: 49.39,
    stock: 15,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "09-Women's Fire Side Ii Sherpa Full Zip.jpg",
    parentFolder: "W-Jackets & Vests",
    gender: "W"
  },
  {
    product_name: "Women's CirrusLite 2.0 Down Parka",
    price: 30.00,
    stock: 17,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "10-Women's CirrusLite 2.0 Down Parka.jpg",
    parentFolder: "W-Jackets & Vests",
    gender: "W"
  },
  {
    product_name: "Women's Kruser Ridge Ii Softshell",
    price: 34.99,
    stock: 12,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "11-Women's Kruser Ridge Ii Softshell.jpg",
    parentFolder: "W-Jackets & Vests",
    gender: "W"
  },
  {
    product_name: "Women's Core Soft Shell Jacket",
    price: 74.99,
    stock: 11,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "12-Women's Core Soft Shell Jacket.jpg",
    parentFolder: "W-Jackets & Vests",
    gender: "W"
  },
  {
    product_name: "Women's EcoSmart Full-Zip Hoodie Sweatshirt",
    price: 46.99,
    stock: 13,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "13-Women's EcoSmart Full-Zip Hoodie Sweatshirt.jpg",
    parentFolder: "W-Jackets & Vests",
    gender: "W"
  },
  {
    product_name: "Women's Switchback Lined Long Jacket",
    price: 28.99,
    stock: 10,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "14-Women's Switchback Lined Long Jacket.jpg",
    parentFolder: "W-Jackets & Vests",
    gender: "W"
  },
  {
    product_name: "Women's Thickened Down Jacket",
    price: 36.99,
    stock: 19,
    category_id: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    filename: "15-Women's Thickened Down Jacket.jpg",
    parentFolder: "W-Jackets & Vests",
    gender: "W"
  },

  //Womens pants

  {
    product_name: "Sport Women's Performance Pant",
    price: 44.99,
    stock: 14,
    category_id: 3,
    size: womensPantSize,
    filename: "01-Sport Women's Performance Pant.jpg",
    parentFolder: "W-Pants",
    gender: "W"
  },
  {
    product_name: "Women's Soft Jogger Pants Drawstring Pockets",
    price: 24.99,
    stock: 8,
    category_id: 3,
    size: womensPantSize,
    filename: "02-Women's Soft Jogger Pants Drawstring Pockets.jpg",
    parentFolder: "W-Pants",
    gender: "W"
  },
  {
    product_name: "Women's Wrinkle Free Relaxed Fit Straight Leg Pant",
    price: 31.99,
    stock: 17,
    category_id: 3,
    size: womensPantSize,
    filename: "03-Women's Wrinkle Free Relaxed Fit Straight Leg Pant.jpg",
    parentFolder: "W-Pants",
    gender: "W"
  },
  {
    product_name: "Women's Marilyn Straight Denim Jeans",
    price: 27.95,
    stock: 7,
    category_id: 3,
    size: womensPantSize,
    filename: "04-Women's Marilyn Straight Denim Jeans.jpg",
    parentFolder: "W-Pants",
    gender: "W"
  },
  {
    product_name: "All Around Elastic Waist Cotton Medium Twill Pants",
    price: 26.55,
    stock: 12,
    category_id: 3,
    size: womensPantSize,
    filename: "05-All Around Elastic Waist Cotton Medium Twill Pants.jpg",
    parentFolder: "W-Pants",
    gender: "W"
  },
  {
    product_name: "Women's Ease Into Comfort Straight Leg Pant with Tummy Control",
    price: 38.99,
    stock: 8,
    category_id: 3,
    size: womensPantSize,
    filename: "06-Women's Ease Into Comfort Straight Leg Pant with Tummy Control.jpg",
    parentFolder: "W-Pants",
    gender: "W"
  },
  {
    product_name: "Women's French Terry Capri Pant",
    price: 36.99,
    stock: 4,
    category_id: 3,
    size: womensPantSize,
    filename: "07-Women's French Terry Capri Pant.jpg",
    parentFolder: "W-Pants",
    gender: "W"
  },
  {
    product_name: "Women's French Terry Pant",
    price: 37.99,
    stock: 19,
    category_id: 3,
    size: womensPantSize,
    filename: "08-Women's French Terry Pant.jpg",
    parentFolder: "W-Pants",
    gender: "W"
  },
  {
    product_name: "Women's Harem Hippie Pants Boho Clothing",
    price: 29.99,
    stock: 15,
    category_id: 3,
    size: womensPantSize,
    filename: "09-Women's Harem Hippie Pants Boho Clothing.jpg",
    parentFolder: "W-Pants",
    gender: "W"
  },
  {
    product_name: "Women's Relaxed Straight Stretch Twill Pant",
    price: 40.99,
    stock: 4,
    category_id: 3,
    size: womensPantSize,
    filename: "10-Women's Relaxed Straight Stretch Twill Pant.jpg",
    parentFolder: "W-Pants",
    gender: "W"
  },
  {
    product_name: "Women's Flat Front Stretch Twill Pant Slim Fit Bootcut",
    price: 35.99,
    stock: 6,
    category_id: 3,
    size: womensPantSize,
    filename: "11-Women's Flat Front Stretch Twill Pant Slim Fit Bootcut.jpg",
    parentFolder: "W-Pants",
    gender: "W"
  },
  {
    product_name: "Women's Marilyn Straight Denim Jeans",
    price: 19.99,
    stock: 19,
    category_id: 3,
    size: womensPantSize,
    filename: "12-Women's Marilyn Straight Denim Jeans.jpg",
    parentFolder: "W-Pants",
    gender: "W"
  },
  {
    product_name: "Women's EcoSmart Open Bottom Leg Sweatpants",
    price: 27.99,
    stock: 44,
    category_id: 3,
    size: womensPantSize,
    filename: "13-Women's EcoSmart Open Bottom Leg Sweatpants.jpg",
    parentFolder: "W-Pants",
    gender: "W"
  },
  {
    product_name: "Women's Printed Solid Activewear Jogger Track Cuff Sweatpants",
    price: 26.39,
    stock: 16,
    category_id: 3,
    size: womensPantSize,
    filename: "14-Women's Printed Solid Activewear Jogger Track Cuff Sweatpants.jpg",
    parentFolder: "W-Pants",
    gender: "W"
  },
  {
    product_name: "Women’s Relaxed Fit All Day Straight Leg Pant",
    price: 39.95,
    stock: 16,
    category_id: 3,
    size: womensPantSize,
    filename: "15-Women’s Relaxed Fit All Day Straight Leg Pant.jpg",
    parentFolder: "W-Pants",
    gender: "W"
  },

  
  // {
  //   product_name: "Shorts",
  //   price: 10.99,
  //   stock: 14,
  //   category_id: 4,
  //   size: ["S", "M", "L", "XL", "XXL"],
  //   filename: "",
  //   gender: "M"
  // },
  // {
  //   product_name: "Jacket",
  //   price: 44.99,
  //   stock: 14,
  //   category_id: 5,
  //   size: ["S", "M", "L", "XL", "XXL"],
  //   filename: "",
  //   gender: "M"
  // },

  // {
  //   product_name: "Pants",
  //   price: 11.99,
  //   stock: 14,
  //   category_id: 3,
  //   size: "",
  //   filename: "",
  //   gender: "M"
  //   },

  //   {
  //     product_name: "Plain T-Shirt",
  //     price: 11.99,
  //     stock: 14,
  //     category_id: 1,
  //     size: ["S", "M", "L", "XL", "XXL"],
  //     filename: "",
  //     gender: "W"
  //   },
  //   {
  //     product_name: "Hoodie",
  //     price: 24.99,
  //     stock: 14,
  //     category_id: 2,
  //     size: ["S", "M", "L", "XL", "XXL"],
  //     filename: "",
  //     gender: "W"
  //   },
  //   {
  //     product_name: "Shorts",
  //     price: 10.99,
  //     stock: 14,
  //     category_id: 4,
  //     size: ["S", "M", "L", "XL", "XXL"],
  //     filename: "",
  //     gender: "W"
  //   },
  //   {
  //     product_name: "Jacket",
  //     price: 44.99,
  //     stock: 14,
  //     category_id: 5,
  //     size: ["S", "M", "L", "XL", "XXL"],
  //     filename: "",
  //     gender: "W"
  //   },
  
  //   {
  //     product_name: "Pants",
  //     price: 11.99,
  //     stock: 14,
  //     category_id: 3,
  //     size: "",
  //     filename: "",
  //     gender: "W"
  //     },


  
  // {
  //   product_name: 'Running Sneakers',
  //   price: 90.0,
  //   stock: 25,
  //   category_id: 5,
  // },
  // {
  //   product_name: 'Branded Baseball Hat',
  //   price: 22.99,
  //   stock: 12,
  //   category_id: 4,
  // },
  // {
  //   product_name: 'Top 40 Music Compilation Vinyl Record',
  //   price: 12.99,
  //   stock: 50,
  //   category_id: 3,
  // },
  // {
  //   product_name: 'Cargo Shorts',
  //   price: 29.99,
  //   stock: 22,
  //   category_id: 2,
  // },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;