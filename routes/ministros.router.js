// const express = require("express")
// const router = express.Router()

import { Router} from 'expres';
const router = Router();

//const ministrosController = require("../controller/ministros.controller")
import { getAll, getById, addMinistro, updMinistro, dltMinistro} from '../controller/ministros.controller'

router.get("/", getAll)
router.get("/:id", getById)
router.post("/",addMinistro)
router.put("/:id",updMinistro)
router.delete("/:id",dltMinistro)

module.exports = router