const express = require("express")
const router = express.Router()


const iglesiasController = require("../controller/iglesias.controller")

router.get("/",iglesiasController.getAll)
router.get("/:id",iglesiasController.getById)
router.post("/",iglesiasController.add)
router.put("/:id",iglesiasController.update)
router.delete("/:id",iglesiasController.delete)

module.exports = router