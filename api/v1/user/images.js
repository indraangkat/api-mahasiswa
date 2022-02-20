const baseResponse = require('../../../utils/BaseResponse')
const con = require ('../../../config/connection')
const req = require("express/lib/request");


const images= ( req, res)=>{
// MENGGUNAKAN PARAM KARENA PAKAI URL /:NIM
    const nim = req.params.nim

if(!req.file){
    const response = new baseResponse(4000, "Image Tidak ditemukan")
    return res.status(400).json(response)
}
else{  
    con.query(`UPDATE tbl_users SET foto_user= '${req.file.filename}'  WHERE nim=?`,[nim],
(err, result)=>{
    const response = new baseResponse(2000,"Berhasil Upload Image")
    return res.status(200).json(response)
}
)}}
module.exports = images