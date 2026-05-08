const jwt = require("jsonwebtoken"); 

const verifyAuthentication = (req, res, next) => {

    const { authorization } = req.headers;

    const invalidTokenMessage = {
        error: "@authenticate/invalid-token",
        message: "Token is invalid"
    };

    if (!authorization) {
        return res.status(401).json(invalidTokenMessage);
    }

    const [prefix, token] = authorization.split(" ");

    if (!token) {
        return res.status(401).json(invalidTokenMessage);
    }

    if (prefix !== "Bearer") {
        return res.status(401).json(invalidTokenMessage);
    }

    jwt.verify(token, "secret", (err, decoded) => {

        if (err) {
            return res.status(401).json(invalidTokenMessage);
        }

        console.log(decoded);

        return next();
    });
};

module.exports = {
    verifyAuthentication
};