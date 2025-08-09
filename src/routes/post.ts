import express from 'express';
import asyncHandler from 'express-async-handler';

import getPostMiddleWare from '../middleware/post/get-post.js';
import getPostController from '../controller/post/get-post.js';

import createPostMiddleware from '../middleware/post/create-post.js';
import createPostController from '../controller/post/create-post.js';

import editPostMiddleware from '../middleware/post/edit-post.js';
import editPostController from '../controller/post/edit-post.js';

import checkPostPasswordMiddleware from '../middleware/post/check-post-password.js';
import checkPostPasswordController from '../controller/post/check-post-password.js';

import deletePostMiddleware from '../middleware/post/delete-post.js';
import deletePostController from '../controller/post/delete-post.js';

import errorHandler from '../error-handler/error-handler.js';

const postRouter = express.Router();
postRouter
  .get(
    '/:post_id',
    asyncHandler(getPostMiddleWare),
    asyncHandler(getPostController),
    errorHandler
  )
  .post(
    '/',
    asyncHandler(createPostMiddleware),
    asyncHandler(createPostController),
    errorHandler
  )
  .post(
    '/:post_id/check-post-password',
    asyncHandler(checkPostPasswordMiddleware),
    asyncHandler(checkPostPasswordController),
    errorHandler
  )
  .patch(
    '/:post_id',
    asyncHandler(editPostMiddleware),
    asyncHandler(editPostController),
    errorHandler
  )
  .delete(
    '/:post_id',
    asyncHandler(deletePostMiddleware),
    asyncHandler(deletePostController),
    errorHandler
  );

export default postRouter;