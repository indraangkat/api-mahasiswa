const BaseResponse = require('../../../utils/BaseResponse')
const con = require('./../../../config/connection')

const logout = (req, res) =>{
        let id = req.params.id

        con.query("UPDATE tbl_users set token = '' WHERE id=? ",[id],(err, result)=>{
            if(err){
                const response = new BaseResponse(5000,err.sqlMessage)
            return res.status(500).json(response)
            }
            else{
                const response = new BaseResponse(2000,"Logout Succesfully")
            return res.status(200).json(response)
            }

        })
    }

module.exports = logout