const User = require("../models/user.model");
const asyncHandler = require('../utils/asyncHandler')

exports.getAllUsers = asyncHandler(async (req, res) => {

  const filter = {};

    if (req.query.role) {
      filter.role = req.query.role;
    }

    const users = await User.find(filter).select("-password");

    res.json(users);
  });

exports.getCurrentUser = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user.id).select("-password");

    res.json(user);
  });

exports.getUserById = asyncHandler(async (req, res) => {

  const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(user);
  });

exports.updateUserRole = asyncHandler(async (req, res) => {

  const { role } = req.body;

    const allowedRoles = ["ADMIN", "ENGINEER", "EMPLOYEE"];

    if (!allowedRoles.includes(role)) {
      return res.status(400).json({
        message: "Invalid role",
      });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true },
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (req.user.id === req.params.id) {
      return res.status(400).json({
        message: "You cannot modify your own role",
      });
    }

    res.json(user);
  });

exports.deleteUser = asyncHandler(async (req, res) => {

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    await user.deleteOne();

    res.json({
      message: "User deleted",
    });
  });

exports.getDashboardStats = asyncHandler(async (req, res) => {

    const openTickets =
      await Ticket.countDocuments({
        status: 'OPEN'
      });

    const assignedTickets =
      await Ticket.countDocuments({
        status: 'ASSIGNED'
      });

    const inProgressTickets =
      await Ticket.countDocuments({
        status: 'IN_PROGRESS'
      });

    const resolvedTickets =
      await Ticket.countDocuments({
        status: 'RESOLVED'
      });

    const recentTickets =
      await Ticket.find()
        .sort({ createdAt: -1 })
        .limit(5);

    res.json({
      openTickets,
      assignedTickets,
      inProgressTickets,
      resolvedTickets,
      recentTickets
    });

  });
