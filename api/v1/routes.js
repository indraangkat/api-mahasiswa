const express = require('express')
const router = express.Router()

const users = require ('./user/routes')
router.use("/user", users)

const matakuliah = require ('./matakuliah/routes')
router.use("/matakuliah", matakuliah)

const krs = require('./krs/routes')
router.use("/krs", krs)

const dosen = require('./dosen/routes')
router.use("/dosen", dosen)



module.exports = router 