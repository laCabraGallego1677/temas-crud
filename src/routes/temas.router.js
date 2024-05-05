const { getAll, create, getOne,remove,update } = require("../controllers/temas.controllers");
const express = require("express");

const temasRouter = express.Router();

temasRouter.route("/temas").get(getAll).post(create);

temasRouter.route("/temas/:id").get(getOne).delete(remove).put(update)

module.exports = temasRouter;
