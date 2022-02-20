const con = require('../../../config/connection')
const baseResponse = require('../../../utils/BaseResponse')
const {generateAuthToken} = require('../../../utils/token')

const login = (req, res) =>{
    const nim = req.body.nim
    const password = req.body.password
  
    // QUERY LOGIN DENGAN NIM DAN PASSWORD
    con.query("SELECT * FROM tbl_users WHERE nim=? AND password=?",[nim,password],(err, result)=>{
        // JIKA SQL ERROR
        if(err){
            const response = new baseResponse(5000, err.sqlMessage)
            return res.status(500).json(response)
         }
        //  JIKA USER ADA DAN BERHASIL LOGIN
         if(result.length > 0 ){
             delete result[0].password
             delete result[0].token 
            console.log(result,33333)
            
             let token = generateAuthToken(result[0])
             con.query('UPDATE tbl_users SET token= ? WHERE nim=?',[token.jwtid, req.body.nim], (err) =>{
                 if(err){
                     const response = new baseResponse(5000,err.sqlMessage)
                     return res.status(500).json(response)
                 }      
                 const response = new baseResponse().withDataObject(result).withToken(token.token)
                return res.status(200).json(response)

            })
        }
     
        // JIKA USER TIDAK ADA / TIDAK BERHASIL LOGIN
         else {
             const response = new baseResponse(4004,"Data Not Found")
            return res.status(404).json(response)
         }
          
         
    })
}
module.exports = login