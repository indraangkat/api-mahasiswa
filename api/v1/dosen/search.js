const con = require('../../../config/connection')
const baseResponse = require('../../../utils/BaseResponse')

const search = (req,res)=>{
    let id_matakuliah = req.query.id_matakuliah
   
        // QUERY PARAM MENCARI NAMA DOSEN BERDASARKAN ID MATKUL
    con.query("SELECT tbl_dosen.* FROM tbl_dosen WHERE id_matakuliah =? ",[id_matakuliah],
    (err, result) =>{
        // JIKA SQL ERROR
      if(err){
            const response = new baseResponse(5000, err.sqlMessage)
            return res.status(500).json(response)
         }
        //  JIKA DATA BERDASARKAN NAMA DOSEN ADA
         if(result.length > 0 ){
            const response = new baseResponse().withDataList(result)
           return res.status(200).json(response)
        }
        // JIKA DATA TIDAK ADA
        else {
            const response = new baseResponse(4004,"Data Not Found")
           return res.status(404).json(response)
        }
    }
    )
}

    module.exports = search