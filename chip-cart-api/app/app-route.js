module.exports = (app) => {
    const express = require('express');
    const ROUTER = express.Router();

    const UserController = require('./user-controller');
    ROUTER.get('/users', UserController.findAll);
    ROUTER.get('/users/:id', UserController.findByPk);
    ROUTER.post('/users/add', UserController.create);
    ROUTER.put('/users/update/:id', UserController.update);
    ROUTER.delete('/users/delete/:id', UserController.delete);

    const ProductController = require('./product-controller');
    ROUTER.get('/product', ProductController.findAll);
    ROUTER.get('/product/:id', ProductController.findByPk);
    ROUTER.get('/product/categories/:categories', ProductController.findAllCategories);
    ROUTER.get('/product/userid/:userid', ProductController.findAllByUserid);
    ROUTER.post('/product/add', ProductController.create);
    ROUTER.put('/product/update/:id', ProductController.update);
    ROUTER.delete('/product/delete/:id', ProductController.delete);

    const OrderTableController = require('./order-table-controller');
    ROUTER.get('/order', OrderTableController.findAll);
    ROUTER.get('/order/:id', OrderTableController.findByPk);
    ROUTER.post('/order/add', OrderTableController.create);
    ROUTER.put('/order/update/:id', OrderTableController.update);
    ROUTER.delete('/order/delete/:id', OrderTableController.delete);

    const OrderDetailController = require('./order-detail-controller');
    ROUTER.get('/order-detail', OrderDetailController.findAll);
    ROUTER.get('/order-detail/:id', OrderDetailController.findByPk);
    ROUTER.post('/order-detail/add', OrderDetailController.create);
    ROUTER.put('/order-detail/update/:id', OrderDetailController.update);
    ROUTER.delete('/order-detail/delete/:id', OrderDetailController.delete);


    app.use('/app', ROUTER);
}

