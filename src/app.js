const express = require('express');

const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(express.json());

const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));

const helmet = require('helmet');

app.use(helmet());

const morgan = require('morgan');

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ message: 'SmartHelpDesk API Running' });
});

app.use('/api/auth', authRoutes);

const ticketRoutes = require('./routes/ticket.routes');

app.use('/api/tickets', ticketRoutes);

const userRoutes = require('./routes/user.routes');

app.use('/api/users', userRoutes);

const rateLimiter = require('./middleware/rateLimit.middleware');

app.use(rateLimiter);

const errorMiddleware = require("./middleware/error.middleware");

app.use(errorMiddleware);

module.exports = app;