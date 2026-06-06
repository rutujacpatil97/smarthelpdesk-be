const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

const validate = require('../middleware/validation.middleware');

const {
  createTicketValidation,
  updateStatusValidation,
  assignTicketValidation,
  addCommentValidation
} = require('../validators/ticket.validator');

const {
  createTicket,
  getTickets,
  getDashboardStats,
  assignTicket,
  updateStatus,
  getTicketById,
  addComment
} = require("../controllers/ticket.controller");

router.post("/", auth, role("EMPLOYEE"), createTicketValidation, validate, createTicket);
router.get("/", auth, getTickets);
router.get("/dashboard/stats", auth, getDashboardStats);
router.get("/:id", auth, getTicketById);
router.patch("/:id/assign", auth, role("ADMIN", "ENGINEER"), assignTicketValidation, validate, assignTicket);
router.patch("/:id/status", auth, role("ADMIN","EMPLOYEE", "ENGINEER"), updateStatusValidation, validate, updateStatus);
router.post("/:id/comment", auth,role("EMPLOYEE"), addCommentValidation, validate, addComment);

module.exports = router;
