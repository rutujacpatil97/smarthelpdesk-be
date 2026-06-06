const Ticket = require("../models/ticket.model");
const User = require("../models/user.model");
const asyncHandler = require("../utils/asyncHandler");

exports.createTicket = asyncHandler(async (req, res) => {
  const { title, description, category, priority } = req.body;

  const ticket = await Ticket.create({
    ticketNumber: `TKT-${Date.now()}`,
    title,
    description,
    category,
    priority,
    createdBy: req.user.id,
  });

  res.status(201).json(ticket);
});

exports.getTickets = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const filter = {};

  if (req.query.status) {
    filter.status = req.query.status;
  }

  if (req.query.priority) {
    filter.priority = req.query.priority;
  }

  if (req.query.search) {
    filter.title = {
      $regex: req.query.search,
      $options: "i",
    };
  }

  // Engineer: Assigned Tickets
  if (req.query.assignedTo === "me" && req.query.mode === "assigned") {
    filter.assignedTo = req.user.id;
    filter.status = {
      $in: ["ASSIGNED", "IN_PROGRESS", "REOPENED"],
    };
  }

  // Engineer: Resolved Tickets
  if (req.query.assignedTo === "me" && req.query.mode === "resolved") {
    filter.assignedTo = req.user.id;
    filter.status = "RESOLVED";
  }

  // Employee: My Tickets
  if (req.query.createdBy === "me") {
    filter.createdBy = req.user.id;
  }

  const tickets = await Ticket.find(filter)
    .populate("createdBy", "name email")
    .populate("assignedTo", "name email")
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });

  const total = await Ticket.countDocuments(filter);

  res.json({
    total,
    page,
    limit,
    tickets,
  });
});

exports.getTicketById = asyncHandler(async (req, res) => {
  const ticket = await Ticket.findById(req.params.id)
    .populate("createdBy", "name email")
    .populate("assignedTo", "name email role")
    .populate("comments.commentedBy", "name role");

  if (!ticket) {
    return res.status(404).json({
      message: "Ticket not found",
    });
  }

  res.json(ticket);
});

exports.assignTicket = asyncHandler(async (req, res) => {
  const { assignedTo } = req.body;

  const engineer = await User.findById(assignedTo);

  if (!engineer) {
    return res.status(404).json({
      message: "Engineer not found",
    });
  }

  if (engineer.role !== "ENGINEER") {
    return res.status(400).json({
      message: "User is not an engineer",
    });
  }

  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    return res.status(404).json({
      message: "Ticket not found",
    });
  }

  if (ticket.assignedTo) {
    return res.status(400).json({
      message: "Ticket already assigned",
    });
  }

  ticket.assignedTo = assignedTo;

  ticket.status = "ASSIGNED";

  await ticket.save();

  const updatedTicket = await Ticket.findById(ticket._id).populate(
    "assignedTo",
    "name email role",
  );

  res.json(updatedTicket);
});

exports.updateStatus = asyncHandler(async (req, res) => {
  const { status, comment } = req.body;

  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    return res.status(404).json({
      message: "Ticket not found",
    });
  }

  ticket.status = status;

  if (comment) {
    ticket.comments.push({
      comment,
      commentedBy: req.user.id,
      status,
    });
  }

  await ticket.save();

  const updatedTicket = await Ticket.findById(ticket._id).populate(
    "comments.commentedBy",
    "name role",
  );

  res.json(updatedTicket);
});

exports.addComment = asyncHandler(async (req, res) => {
  const { comment } = req.body;

  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    return res.status(404).json({
      message: "Ticket not found",
    });
  }

  ticket.comments.push({
    comment,
    commentedBy: req.user.id,
  });

  await ticket.save();

  const updatedTicket = await Ticket.findById(ticket._id).populate(
    "comments.commentedBy",
    "name role",
  );

  res.json(updatedTicket);
});

exports.getDashboardStats = asyncHandler(async (req, res) => {
  const stats = await Ticket.aggregate([
    {
      $group: {
        _id: "$status",
        count: {
          $sum: 1,
        },
      },
    },
  ]);

  const dashboard = {
    totalTickets: 0,
    openTickets: 0,
    assignedTickets: 0,
    inProgressTickets: 0,
    resolvedTickets: 0,
  };

  stats.forEach((item) => {
    dashboard.totalTickets += item.count;

    switch (item._id) {
      case "OPEN":
        dashboard.openTickets = item.count;
        break;

      case "ASSIGNED":
        dashboard.assignedTickets = item.count;
        break;

      case "IN_PROGRESS":
        dashboard.inProgressTickets = item.count;
        break;

      case "RESOLVED":
        dashboard.resolvedTickets = item.count;
        break;
    }
  });

  res.json(dashboard);
});
