const express = require("express")
const routerMinistros = express.Router()

const {getAll, getById, addMinistro, updMinistro, dltMinistro} = require("../controller/ministros.controller")

routerMinistros.get("/", getAll)
routerMinistros.get("/:id", getById)
routerMinistros.post("/",addMinistro)
routerMinistros.put("/:id",updMinistro)
routerMinistros.delete("/:id",dltMinistro)

module.exports = routerMinistros;