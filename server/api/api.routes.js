const router = require('express').Router();
const db = require('../dao');
const { SEND } = require('./helper');
const {createToken,verifyToken,isAdmin} =require('../token-manager');

module.exports = function mountApiRoutes(app) {
    router.use("/admin",verifyToken,isAdmin, require('./admin/admin.routes'))
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



router.post('/register', (req, res) => {
    let data = req.body;
    db.users.findOne({ username: data.username }, (err, user) => {
        if (user && user._id) {
            SEND(res, 'User already exist', null);
        } else {
            data.active = true;
            data.role = 'user';
            db.users.insert(data, (err1, saved) => {
                SEND(res, err1, saved);
            })
        }
    })

});


router.post('/login', (req, res) => {
    let body = req.body;
    console.log('Checking for user', body);
    if (body.username === 'admin' && body.password === 'admin') {
        let userInfo = { username: 'admin', role: 'admin', userId: 1 };
        let tokenData = createToken(userInfo);
        userInfo.token = tokenData;
        SEND(res, null, userInfo);
    } else {
        db.users.findOne({ username: body.username, password: body.password, active: true },
            (err, user) => {
                if (err) {
                    SEND(res, err);
                } else if (user && user._id) {
                    let userInfo = { username: user.username, role: user.role, id: user._id };
                    let tokenData = createToken(userInfo);
                    userInfo.token = tokenData;
                    SEND(res,null,userInfo);
                } else {
                    SEND(res,'Username or password is incorrect');
                }
            })
    }
});