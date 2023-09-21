const express = require("express")
const router = express.Router()

const { getAll, getById, add, update, deleteIglesia } = require("../controller/iglesias.controller")

router.get("/",getAll)
router.get("/:id",getById)
router.post("/",add)
router.put("/:id",update)
router.delete("/:id",deleteIglesia)

module.exports = router