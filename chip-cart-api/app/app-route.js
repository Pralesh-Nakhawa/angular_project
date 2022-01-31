module.exports=(app)=>{
    const express=require('express');
    const ROUTER=express.Router();


    const UserController=require('./user-controller');

    ROUTER.get('/users',UserController.findAll);
    ROUTER.get('/users/:id',UserController.findByPk);
    ROUTER.post('/users/add',UserController.create);
    ROUTER.put('/users/update/:id',UserController.update);
    ROUTER.delete('/users/delete/:id',UserController.delete);


    const ProductController=require('./product-controller');  

    ROUTER.get('/product',ProductController.findAll);  
    ROUTER.get('/product/:id',ProductController.findByPk);
    ROUTER.get('/product/categories/:categories',ProductController.findAllCategories);
    ROUTER.post('/product/add',ProductController.create);
    // //PUT url: http://localhost:3000/app/product/update/:id
     ROUTER.put('/product/update/:id',ProductController.update);
    // //DELETE url: http://localhost:3000/app/product/delete/:id
     ROUTER.delete('/product/delete/:id',ProductController.delete);  
    //Main url: http://localhost:3000/app/


    app.use('/app',ROUTER);
}

