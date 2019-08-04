const jwt = require('jsonwebtoken');

const SECRET_KEY = "secret";

module.exports = {
    createToken: createToken,
    verifyToken: verifyToken,
    isAdmin: isAdmin
}

function createToken(payload) {
    return jwt.sign(payload, SECRET_KEY);
}



function getTokenFromHeader(token) {
    // const bearerHeader = req.headers["authorization"];
    if (typeof token != 'undefined') {
        const bearer = token.split(" ");
        const bearerToken = bearer[1];
        return bearerToken;
    } else {
        return null;

    }
}

function verifyToken(req, res, next) {
    let token = getTokenFromHeader(req.headers["authorization"]);
    if (token) {
        jwt.verify(token, SECRET_KEY, function (err, data) {
            if (err) {
                console.log(err);
                res.sendStatus(403);
            } else {
                req.tokenData = data;
                next();
            }
        });
    } else {
        res.sendStatus(403);
    }

}


function isAdmin(req, res, next) {
    if (req.tokenData && req.tokenData.role === 'admin') {
        next();
    } else {
        res.sendStatus(401);
    }
}
