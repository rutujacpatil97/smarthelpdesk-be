const {
  body
} = require('express-validator');

exports.updateRoleValidation = [

  body('role')
    .isIn([
      'ADMIN',
      'ENGINEER',
      'EMPLOYEE'
    ])
    .withMessage(
      'Invalid role'
    )

];