const express = require("express")
const router = express.Router()


const ministrosController = require("../controller/ministros.controller")

router.get("/",ministrosController.getAll)
router.get("/:id",ministrosController.getById)
router.post("/",ministrosController.add)
router.put("/:id",ministrosController.update)
router.delete("/:id",ministrosController.delete)

module.exports = router