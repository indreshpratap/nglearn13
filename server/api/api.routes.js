const router = require('express').Router();
const db = require('../dao');
const { SEND } = require('./helper');
module.exports = function mountApiRoutes(app) {
    router.use("/admin", require('./admin/admin.routes'))
    app.use('/api', router);
};

router.get('/products', (req, res) => {
    db.products.find({ active: true, published: true },
         { name: 1, description: 1, price: 1 }, (err, products) => {
        SEND(res, err, products);
    });
});

router.get('/suggested-products', (req, res) => {
    db.products.find({ active: true, published: true },
         { name: 1, description: 1, price: 1 })
        .limit(4)
        .exec((err, products) => {
            SEND(res, err, products);
        });
});

router.get('/product/:id', (req, res) => {
    db.products.findOne({ active: true, published: true, _id: req.params.id },
         (err, product) => {
        SEND(res, err, product);
    });
});