const router = require('express').Router();


module.exports = function mountApiRoutes(app) {
    router.use("/admin", require('./admin/admin.routes'))
    app.use('/api', router);
}