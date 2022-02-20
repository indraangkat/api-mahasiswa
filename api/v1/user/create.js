const con = require('../../../config/connection')
const baseResponse = require('../../../utils/BaseResponse')

const create = (req, res) =>{
    const nim = req.body.nim
    const password = req.body.password
    const name = req.body.name
    const email = req.body.email
    const address = req.body.address
    const jurusan= req.body.jurusan
    const gender = req.body.gender

            //CHECK NIM AJA ADA DENGAN METODE RESULT / HASIL LEBIH DARI 0
          con.query("SELECT COUNT(*) as CNT FROM tbl_users WHERE nim = ?", [nim],
          (err,result) => {
            // JIKA SQL ERROR  
            if(err){
                  const response = new baseResponse(5000, err.sqlMessage)
              return res.status(500).json(response)
              } 
            //   JIKA NIM SUDAH DIPAKAI
              else{
                  if(result[0].CNT > 0){
                      const response = new baseResponse(4009,"NIM SUDAH DIPAKAI")
              return res.status(409).json(response)
                  }
                //CHECK EMAIL AJA ADA DENGAN METODE RESULT / HASIL LEBIH DARI 0
                  con.query("SELECT COUNT(*) as CNT FROM tbl_users WHERE email = ?", [email],
                  (err,result) => {
                      // JIKA SQL ERROR  
                       if(err){
                          const response = new baseResponse(5000, err.sqlMessage)
                      return res.status(500).json(response)
                      } 
                    //   JIKA EMAIL SUDAH DIPAKAI
                      else{
                          if(result[0].CNT > 0){
                              const response = new baseResponse(4009,"EMAIL SUDAH DIPAKAI")
                      return res.status(409).json(response)
                          }
               
         // CHECK REQ UNTUK MELAKUKAN PENGISIAN FORM REGISTER   
          con.query("INSERT INTO tbl_users(nim, password, name, email, address, jurusan, gender) VALUES(?,?,?,?,?,?,?)", [nim, password, name, email, address, jurusan, gender],
          (err,result)=>{
            // JIKA SQL ERROR 
            if(err){
                  const response = new baseResponse(5000, err.sqlMessage)
                  return res.status(500).json(response)
              }
            //   JIKA USER BERHASIL REGISTER
              const response = new baseResponse(2000, "Created Data Succesfull")
              return res.status(200).json(response)
          })}
        })
    }})
    }

        

module.exports = create