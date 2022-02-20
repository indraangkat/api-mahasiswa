const express = require('express');
const router = express.Router();

const getAll = require("./getAll")
const update = require("./update")
const search = require("./search")

const{v_matakuliah_update, v_matakuliah_delete} = require('../../middleware/validasi')

router.get("/search",search)
router.get("", getAll);
router.put("",v_matakuliah_update,update)
module.exports = router 