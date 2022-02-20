const con = require('../../../config/connection')
const baseResponse = require('../../../utils/BaseResponse')

const search = (req,res)=>{
    const nim = req.query.nim

    // QUERY PARAM MENCARI KRS MAHASISWA DENGAN NIM MAHASISWA
    con.query(`SELECT db_mhs.tbl_users.nim, db_mhs.tbl_users.name, db_mhs.tbl_users.jurusan, db_mhs.tbl_matakuliah.nama_matakuliah, db_mhs.tbl_matakuliah.sks,db_mhs.tbl_dosen.nama_dosen FROM db_mhs.tbl_krs INNER JOIN db_mhs.tbl_users ON db_mhs.tbl_krs.nim = db_mhs.tbl_users.nim INNER JOIN db_mhs.tbl_matakuliah ON db_mhs.tbl_krs.id_matakuliah = db_mhs.tbl_matakuliah.id_matakuliah INNER JOIN db_mhs.tbl_dosen ON db_mhs.tbl_krs.id_dosen = db_mhs.tbl_dosen.id_dosen WHERE tbl_krs.nim LIKE '%${nim}%'`,
    (err, result) =>{
        // JIKA SQL ERROR
        if(err){
            const response = new baseResponse(5000, err.sqlMessage)
            return res.status(500).json(response)
         }
        //  JIKA DATA BERDASARKAN NIM MAHASISWA DITEMUKAN
        
         if(result.length > 0 ){
            const response = new baseResponse().withDataList(result)
           return res.status(200).json(response)
        }
        // JIKA DATA TIDAK DITEMUKAN
        else {
            const response = new baseResponse(4004,"Data Not Found")
           return res.status(404).json(response)
        }
    }
    )
}

    module.exports = search