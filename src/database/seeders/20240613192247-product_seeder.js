'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Product', [
      {
        "name": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "price": 109.95,
        "quantity": 150,
        "created_at": "2024-06-14T00:00:00.000Z",
        "updated_at": "2024-06-14T00:00:00.000Z"
      },
      {
        "name": "Mens Casual Premium Slim Fit T-Shirts",
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "price": 22.3,
        "quantity": 150,
        "created_at": "2024-06-14T00:00:00.000Z",
        "updated_at": "2024-06-14T00:00:00.000Z"
      },
      {
        "name": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "price": 109,
        "quantity": 150,
        "created_at": "2024-06-14T00:00:00.000Z",
        "updated_at": "2024-06-14T00:00:00.000Z"
      },
      {
        "name": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "price": 114,
        "quantity": 150,
        "created_at": "2024-06-14T00:00:00.000Z",
        "updated_at": "2024-06-14T00:00:00.000Z"
      },
      {
        "name": "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        "description": "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "price": 599,
        "quantity": 150,
        "created_at": "2024-06-14T00:00:00.000Z",
        "updated_at": "2024-06-14T00:00:00.000Z"
      },
      {
        "name": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        "description": "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "price": 999.99,
        "quantity": 150,
        "created_at": "2024-06-14T00:00:00.000Z",
        "updated_at": "2024-06-14T00:00:00.000Z"
      },
      {
        "name": "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        "description": "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "price": 56.99,
        "quantity": 150,
        "created_at": "2024-06-14T00:00:00.000Z",
        "updated_at": "2024-06-14T00:00:00.000Z"
      },
      {
        "name": "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        "description": "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        "price": 29.95,
        "quantity": 150,
        "created_at": "2024-06-14T00:00:00.000Z",
        "updated_at": "2024-06-14T00:00:00.000Z"
      },
      {
        "name": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "description": "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "price": 39.99,
        "quantity": 150,
        "created_at": "2024-06-14T00:00:00.000Z",
        "updated_at": "2024-06-14T00:00:00.000Z"
      },
      {
        "name": "MBJ Women's Solid Short Sleeve Boat Neck V ",
        "description": "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "price": 9.85,
        "quantity": 150,
        "created_at": "2024-06-14T00:00:00.000Z",
        "updated_at": "2024-06-14T00:00:00.000Z"
      },
      {
        "name": "Opna Women's Short Sleeve Moisture",
        "description": "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        "price": 7.95,
        "quantity": 150,
        "created_at": "2024-06-14T00:00:00.000Z",
        "updated_at": "2024-06-14T00:00:00.000Z"
      },
      {
        "name": "DANVOUY Womens T Shirt Casual Cotton Short",
        "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "price": 12.99,
        "quantity": 150,
        "created_at": "2024-06-14T00:00:00.000Z",
        "updated_at": "2024-06-14T00:00:00.000Z"
      }
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Product', null, {});
  }
};
