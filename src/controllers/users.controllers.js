const uuid = require("uuid");

const { generateHash, compareHash } = require("../utils/hashProvider");

const users = [
    {
        id: "1",
        name: "João Silva",
        email: "joao@email.com",
        password: "$2b$08$kZ8lmiqaU7y9Cga8VNjBTuj.yL/5UXDwc.D0WxViuXTYl4YPNRtM.",
        age: 25
    }
];

// LISTAR TODOS OS USUÁRIOS
exports.list = (req, res) => {
    return res.json(users);
};

// BUSCAR USUÁRIO POR ID
exports.getById = (req, res) => {
    const { id } = req.params;

    const user = users.find((u) => u.id === id);

    if (!user) {
        return res.status(404).json({
            error: "@users/getById",
            message: `User not found ${id}`
        });
    }

    return res.json(user);
};

// CRIAR USUÁRIO
exports.create = async (req, res) => {
    const { name, email, password, age } = req.body;

    const hashedPassword = await generateHash(password);

    const user = {
        id: uuid.v4(),
        name,
        email,
        password: hashedPassword,
        age
    };

    users.push(user);

    return res.status(201).json(user);
};

// ATUALIZAR USUÁRIO
exports.update = (req, res) => {
    const { id } = req.params;
    const { name, email, password, age } = req.body;

    const userIndex = users.findIndex((u) => u.id === id);

    if (userIndex < 0) {
        return res.status(404).json({
            error: "@users/update",
            message: `User not found ${id}`
        });
    }

    const userUpdated = {
        id,
        name,
        email,
        password,
        age
    };

    users[userIndex] = userUpdated;

    return res.json(userUpdated);
};

// REMOVER USUÁRIO
exports.remove = (req, res) => {
    const { id } = req.params;

    const userIndex = users.findIndex((u) => u.id === id);

    if (userIndex < 0) {
        return res.status(404).json({
            error: "@users/remove",
            message: `User not found ${id}`
        });
    }

    users.splice(userIndex, 1);

    return res.status(204).send();
};

exports.userDatabase = users;
