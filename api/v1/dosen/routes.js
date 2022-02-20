const express = require('express');
const router = express.Router();

const getAll = require("./getAll")
const search = require("./search")

// const {v_dosen_delete} = require('../../middleware/validasi')

router.get("/search", search);
router.get("",getAll);

module.exports = router 