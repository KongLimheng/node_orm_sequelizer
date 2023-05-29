const Joi = require('joi');
const createClr = {
  body: {
    class_name: Joi.string().required(),
  },
};

const queryClr = {
    query: {
        
    }
}

module.exports = {
    createClr
}