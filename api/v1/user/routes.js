const express = require('express');
const router = express.Router();

const create = require("./create")
const update = require("./update")
const login = require("./login")
const images = require("./images")
const logout = require("./logout")

const {v_user_login, v_user_register, v_user_update, v_user_delete} = require ('../../middleware/validasi')
const TokenValidate = require('../../middleware/TokenValidasi')

router.post("/create/",v_user_register,create)
router.put("",v_user_update, TokenValidate, update)
router.post("/login/",v_user_login,login)
router.post("/images/:nim", images)
router.put("/logout", logout)



module.exports = router 
