// api/index.js

require('dotenv').config();
const express = require('express');
const apiRouter = express.Router();

const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);

// MODULE CANNOT BE FOUND, SOURCE OF ERROR UNKNOWN
const postsRouter = require('./posts');
apiRouter.use('/posts', postsRouter);

module.exports = apiRouter;