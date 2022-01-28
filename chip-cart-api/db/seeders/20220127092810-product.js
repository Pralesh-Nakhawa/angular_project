'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Products', [
       {   
        title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
        price: 109,
        description: 'The advanced SLC Cache Technology ',
        categories: 'electronics',
        image: 'Solidstate_drive.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
    
      },

      {   
        title: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
        price: 114,
        description: 'Expand your PS4 gaming experience',
        categories: 'electronics',
        image: 'Hard_Drive.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
    
      },
      { 
        title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
        price: 599,
        description: '21. 5 inches Full HD (1920 x 1080) widescreen IPS display',
        categories: 'electronics',
        image: 'Acer.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
    
      },
      {   
        
        title: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor',
        price: 999.99,
        description: '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR',
        categories: 'electronics',
        image: 'samsung.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
    
      },


      {   
        title: 'Opna Womens Short Sleeve Moisture',
        price: 270.95,
        description: '100% Polyester, Machine wash, 100% cationic polyester interlock',
        categories: 'womens clothing',
        image: 'short_sleeves.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
    
      },
      {   
        title: 'DANVOUY Womens T Shirt Casual Cotton Short',
        price: 112.99,
        description: '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print',
        categories: 'womens clothing',
        image: 'women_tshirt.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
    
      },
      {   
        title: 'Mens Cotton Jacket',
        price: 155.99,
        description: 'great outerwear jackets for Spring/Autumn/Winter',
        categories: 'Mens Clothing',
        image: 'men_jacket.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
    
      },
      {   
        title: 'Mens Casual SlimFit',
        price: 315.99,
        description: 'The color could be slightly different between on the screen and in practice.',
        categories: 'Mens Clothing',
        image: 'men_tshirt.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
    
      },

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
