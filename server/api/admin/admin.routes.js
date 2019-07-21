const router = require('express').Router();
const { SEND } = require('../helper');
const db = require('../../dao');


router.get('/categories', (req, res) => {
    db.categories.find({}, (err, cats) => {
        SEND(res, err, cats);
    })
});

router.get('/cat-select', (req, res) => {
    db.categories.find({}, (err, categories) => {
        let catMap = {};
        if (categories) {
            for (let cat of categories) {
                catMap[cat._id] = cat.categoryName;
            }

            let data = [];
            for (let cat of categories) {

                data.push({
                    _id: cat._id,
                    categoryName: cat.categoryName,
                    parent: cat.parentCategory,
                    label: cat.parentCategory ? catMap[cat.parentCategory] + " -> " + cat.categoryName : cat.categoryName
                })
            }
            data.sort((a, b) => a.label > b.label ? 1 : 0)

            SEND(res, err, data);
        } else {
            SEND(res, null, []);
        }
    })
});


router.post('/category', (req, res) => {
    let body = req.body;
    body.createdAt = new Date();
    body.active = true;
    db.categories.insert(body, (err, cat) => {
        SEND(res, err, cat);
    })
});


router.post('/product', (req, res) => {
    let body = req.body;
    body.createdAt = new Date();
    body.active = true;

    db.products.insert(body, (err, prod) => {
        SEND(res, err, prod);
    })
});

router.put('/product', (req, res) => {
    let body = req.body;
    body.modifiedAt = new Date();

    let id = body._id;
    delete body._id;

    db.products.update({ _id: id }, { $set: body }, (err, prod) => {
        SEND(res, err, prod);
    });
});




router.get('/products', (req, res) => {
    db.products.find({}, (err, products) => {
        SEND(res, err, products);
    });
});


module.exports = router;