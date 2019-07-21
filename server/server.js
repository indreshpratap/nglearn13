const express = require('express');
const faker = require('faker');
const cors = require('cors');
const bodyParser = require('body-parser');
const { SEND } = require('./api/helper');


const mountApiRoutes = require('./api/api.routes');
// server app
const app = express();

app.use(bodyParser.json());
app.use(cors());


const userCache = [];
const productCache = [];

function prepareUserCache() {
    for (let i = 0; i <= 200; i++) {
        userCache.push({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            username: faker.internet.userName(),
            email: faker.internet.email()
        });
    }
}

function prepareProductCache() {
    for (let i = 0; i <= 200; i++) {
        productCache.push({
            id: i,
            name: faker.commerce.productName(),
            department: faker.commerce.department(),
            color: faker.commerce.color(),
            price: faker.commerce.price(),
            product: faker.commerce.product(),
            material: faker.commerce.productMaterial()
        });
    }
}




app.get('/', (req, res) => {
    res.send('Server is up and running for Node learn 13');
});

app.get('/users', (req, res) => {
    if (!userCache.length) {
        prepareUserCache();
    }
    res.json(userCache);
})
app.get('/products', (req, res) => {
    if (!productCache.length) {
        prepareProductCache();
    }
    SEND(res, null,productCache);
})

mountApiRoutes(app);

app.listen(3000, () => {
    console.log("Server is up and running at 3000...");
})