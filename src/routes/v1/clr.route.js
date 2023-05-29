const express = require('express');
const { clrController } = require('../../controllers');
const validate = require('../../middlewares/validate');
const { clrValidation } = require('../../validations');
const router = express.Router();

router.get('/', clrController.getClassrooms)
    .post('/', validate(clrValidation.createClr), clrController.createClassroom);

module.exports = router;
