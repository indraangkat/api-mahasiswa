const con = require('../../../config/connection')
const baseResponse = require('../../../utils/BaseResponse')

const update = (req, res) =>{
    const nama_matakuliah = req.body.nama_matakuliah
    const nama_dosen = req.body.nama_dosen
    const sks = req.body.sks
    const id_matakuliah = req.body.id_matakuliah

//    QUERY UPDATE PADA TABLE MATAKULIAH
    con.query('UPDATE tbl_matakuliah SET nama_matakuliah=?, nama_dosen=?, sks=? WHERE id_matakuliah=?',
    [id_matakuliah, nama_matakuliah, nama_dosen, sks,id],(err, result)=>{
    //    JIKA SQL ERROR
        if(err){
    const response = new baseResponse(5000, err.sqlMessage)
        return res.status(500).json(response)
    }
    // JIKA BERHASIL UPDATE DATA MATAKULIAH
    else {
        const response = new baseResponse(2000, "Update Data Succesfull")
        return res.status(200).json(response)
} })}

module.exports = update 