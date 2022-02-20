const con = require('../../../config/connection')
const baseResponse = require('../../../utils/BaseResponse')

const update = (req, res) =>{
    const address = req.body.address
    const password = req.body.password
    const email = req.body.email
    const id = req.body.id
    

    // QUERY UPDATE DATA PADA TABEL USERS
    con.query('UPDATE tbl_users SET password=?, address=?, email=?  WHERE id=?',
    [password, address, email, id],(err, result)=>{
    // JIKA SQL ERROR
        if(err){
    const response = new baseResponse(5000, err.sqlMessage)
        return res.status(500).json(response)
    }
    else {
    //   QUERY RESPON JSON SAAT BARU UPDATE DATA USER
        con.query("SELECT * FROM tbl_users WHERE id=?",[id],(err, result)=>{
        if(err){
            const response = new baseResponse(5000, err.sqlMessage)
                return res.status(500).json(response)
        }
        // MENAMPILKAN DATA JSON SETELAH BERHASIL UPDATE DATA USER
        const response = new baseResponse(2000, "Update Data Succesfull").withDataObject(result)
        return res.status(200).json(response)

        })
        
} })}

module.exports = update 