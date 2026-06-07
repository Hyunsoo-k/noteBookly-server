import express from 'express';
import asyncHandler from 'express-async-handler';

import getPostListMiddleware from '../middleware/posts/getPostsMiddleware.js';
import getPostListController from '../controller/posts/getPostsController.js';

import errorHandler from '../errorHandler/errorHandler.js';

const postsRouter = express.Router();

postsRouter.get(
  '/',
  asyncHandler(getPostListMiddleware),
  asyncHandler(getPostListController),
  errorHandler
);

export default postsRouter;