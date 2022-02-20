const con = require('../../config/connection')

const nimExist = (req, res) => {
    con.query("SELECT COUNT(*) as CNT FROM tbl_users WHERE nim = ?",[req.body.nim], (err,result) => {
        // JIKA SQL ERROR  
            if(err){
                  const response = new baseResponse(5000, err.sqlMessage)
              return res.status(500).json(response)
              } 
            //   JIKA NIM SUDAH DIPAKAI
              else{
                  if(result[0].CNT > 0){
                      const response = new baseResponse(4009,"NIM SUDAH DIPAKAI")

            }
        }
    })
}
const emailExist = (req, res) => {
    con.query("SELECT COUNT(*) as CNT FROM tbl_users WHERE email = ?",[req.body.email], (err,result) => {
        // JIKA SQL ERROR  
            if(err){
                  const response = new baseResponse(5000, err.sqlMessage)
              return res.status(500).json(response)
              } 
            //   JIKA NIM SUDAH DIPAKAI
              else{
                  if(result[0].CNT > 0){
                      const response = new baseResponse(4009,"EMAIL SUDAH DIPAKAI")

            }
        }
    })
}


module.exports = {nimExist, emailExist, }