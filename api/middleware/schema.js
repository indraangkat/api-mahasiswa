const Joi = require('joi')

const schema = class schema {
    static schema_user_login() {
      return Joi.defaults((schema) =>
        schema.options({
          allowUnknown: true,
        })
      ).object({
        nim: Joi.string().required(),
        password: Joi.string().min(8).max(16).required(),
      });
    }

    static schema_user_register() {
        return Joi.defaults((schema) =>
          schema.options({
            allowUnknown: true,
          })
        ).object({
          nim: Joi.string().required(),
          password: Joi.string().min(8).max(16).required(),
          jurusan: Joi.string().required(),
          name: Joi.string().required(),
          address: Joi.string().required(),
          gender: Joi.string().required(),
          email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        });
      }

    static schema_user_update() {
      return Joi.defaults((schema) =>
        schema.options({
          allowUnknown: true,
        })
      ).object({
        id: Joi.string().required(),
        password: Joi.string().min(8).max(16).required(),
      });
    }   
    
    static schema_user_delete() {
        return Joi.defaults((schema) =>
          schema.options({
            allowUnknown: true,
          })
        ).object({
          id: Joi.string().required()
        });
      }
    
    static schema_matakuliah_update() {
        return Joi.defaults((schema) =>
          schema.options({
            allowUnknown: true,
          })
        ).object({
          id_matakuliah: Joi.string().required()
        });
      }   
      
       
    static schema_matakuliah_delete() {
        return Joi.defaults((schema) =>
          schema.options({
            allowUnknown: true,
          })
        ).object({
          id_matakuliah: Joi.string().required()
        });
      }   

      static schema_dosen_delete() {
        return Joi.defaults((schema) =>
          schema.options({
            allowUnknown: true,
          })
        ).object({
          id_dosen: Joi.string().required()
        });
      }   

      
      static schema_krs_search() {
        return Joi.defaults((schema) =>
          schema.options({
            allowUnknown: true,
          })
        ).object({
          nim: Joi.string().required()
        });
      }   


}  




module.exports = schema
