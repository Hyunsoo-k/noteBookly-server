import express from 'express';
import asyncHandler from 'express-async-handler';

import getPostListMiddleware from '../middleware/posts/getPosts.js';
import getPostListController from '../controller/posts/getPosts.js';

import errorHandler from '../errorHandler/errorHandler.js';

const postsRouter = express.Router();

postsRouter.get(
  '/',
  asyncHandler(getPostListMiddleware),
  asyncHandler(getPostListController),
  errorHandler
);

export default postsRouter;