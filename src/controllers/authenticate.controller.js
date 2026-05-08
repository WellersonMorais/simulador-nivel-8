const jwt = require("jsonwebtoken");

const { userDatabase } = require("./users.controllers");

const { compareHash } = require("../utils/hashProvider");

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = userDatabase.find((u) => u.email === email);

    const loginErrorMessage = {
        error: "@authenticate/login",
        message: "Invalid email or password"
    }
    
    if (!user) {
        return res.status(400).json(loginErrorMessage);
    }

    const isPasswordValid = await compareHash(password, user.password);
    
    if (!isPasswordValid) {
        return res.status(400).json(loginErrorMessage);
    }

    const token = jwt.sign(user, "secret", { expiresIn: "1h" });

    delete user.password;

    return res.json({...user, token });

}

module.exports = {
    login
}