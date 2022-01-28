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

    app.use('/app',ROUTER);
}

