const routes = require('express').Router();

const {User} = require("./app/models");

User.create({
    name: "Leona",
    email: "leona@teste.com",
    password_hash: "123456789"
});

module.exports = routes;