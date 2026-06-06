const express = require('express');

const router = express.Router();

const auth = require('../middleware/auth.middleware');
const role = require('../middleware/role.middleware');

const { updateRoleValidation } = require('../validators/user.validator');

const validate =
  require(
    '../middleware/validation.middleware'
  );
  
const {
  getAllUsers,
  getCurrentUser,
  getUserById,
  updateUserRole,
  deleteUser
} = require('../controllers/user.controller');

router.get(
  '/',
  auth,
  role('ADMIN'),
  getAllUsers
);

router.get(
  '/me',
  auth,
  getCurrentUser
);

router.get(
  '/:id',
  auth,
  role('ADMIN'),
  getUserById
);

router.patch(
  '/:id/role',
  auth,
  role('ADMIN'),
  updateRoleValidation,
  validate,
  updateUserRole
);

router.delete(
  '/:id',
  auth,
  role('ADMIN'),
  deleteUser
);

module.exports = router;