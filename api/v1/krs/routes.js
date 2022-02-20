const express = require('express');
const router = express.Router();


const search = require("./search")

const {v_krs_search} = require("../../middleware/validasi")

router.get("", v_krs_search,search);

module.exports = router 