const schema = require("./schema");
const ResponseValidation = require("'../../../utils/ResponseValidation")

// V = VALIDASI

module.exports = class validation {
  static v_user_login(req, res, next) {
    const { error } = schema.schema_user_login().validate(req.body);
    if(error) {
      return ResponseValidation(error,res)
   }else{
     return next();
   }
  }

  static v_user_register(req, res, next) {
    const { error } = schema.schema_user_register().validate(req.body);
    if(error) {
      return ResponseValidation(error,res)
   }else{
     return next();
   }
  }

  static v_user_update(req, res, next) {
    const { error } = schema.schema_user_update().validate(req.body);
    if(error) {
      return ResponseValidation(error,res)
   }else{
     return next();
   }
  }
  static v_user_delete(req, res, next) {
    const { error } = schema.schema_user_delete().validate(req.body);
    if(error) {
      return ResponseValidation(error,res)
   }else{
     return next();
   }
  }

  static v_matakuliah_update(req, res, next) {
    const { error } = schema.schema_matakuliah_update().validate(req.body);
    if(error) {
      return ResponseValidation(error,res)
   }else{
     return next();
   }
  }

  static v_matakuliah_delete(req, res, next) {
    const { error } = schema.schema_matakuliah_delete().validate(req.body);
    if(error) {
      return ResponseValidation(error,res)
   }else{
     return next();
   }
  }

  static v_dosen_delete(req, res, next) {
    const { error } = schema.schema_dosen_delete().validate(req.body);
    if(error) {
       return ResponseValidation(error,res)
    }else{
      return next();
    }
  }

  static v_krs_search(req, res, next) {
    const { error } = schema.schema_krs_search().validate(req.query);
    if(error) {
       return ResponseValidation(error,res)
    }else{
      return next();
    }
  }
  
}