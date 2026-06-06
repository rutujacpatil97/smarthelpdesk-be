const {
  body
} = require('express-validator');

exports.createTicketValidation = [

  body('title')
    .trim()
    .notEmpty()
    .withMessage(
      'Title is required'
    ),

  body('description')
    .trim()
    .notEmpty()
    .withMessage(
      'Description is required'
    ),

  body('category')
    .isIn([
      'Hardware',
      'Software',
      'Network',
      'Access'
    ])
    .withMessage(
      'Invalid category'
    ),

  body('priority')
    .isIn([
      'LOW',
      'MEDIUM',
      'HIGH',
      'CRITICAL'
    ])
    .withMessage(
      'Invalid priority'
    )

];

exports.updateStatusValidation = [

  body('status')
    .isIn([
      'OPEN',
      'ASSIGNED',
      'IN_PROGRESS',
      'RESOLVED',
      'REOPENED'
    ])
    .withMessage(
      'Invalid status'
    )

];

exports.assignTicketValidation = [

  body('assignedTo')
    .notEmpty()
    .withMessage(
      'Engineer id is required'
    )

];

exports.addCommentValidation = [

  body('comment')
    .trim()
    .notEmpty()
    .withMessage(
      'Comment is required'
    )

];