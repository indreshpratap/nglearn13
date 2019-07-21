const router = require('express').Router();
const db = require('../dao');
const { SEND } = require('./helper');
module.exports = function mountApiRoutes(app) {
    router.use("/admin", require('./admin/admin.routes'))
    app.use('/api', router);
};

router.get('/products', (req, res) => {
    db.products.find({ active: true, published: true }, (err, products) => {
        SEND(res, err, products);
    });

});