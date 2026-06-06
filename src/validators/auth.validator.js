const {
  body
} = require('express-validator');

exports.registerValidation = [

  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required'),

  body('email')
    .isEmail()
    .withMessage('Invalid email'),

  body('password')
    .isLength({ min: 6 })
    .withMessage(
      'Password must be at least 6 characters'
    ),

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

exports.loginValidation = [

  body('email')
    .isEmail()
    .withMessage(
      'Invalid email'
    ),

  body('password')
    .notEmpty()
    .withMessage(
      'Password is required'
    )

];