import express from 'express';
import asyncHandler from 'express-async-handler';

import getPostMiddleWare from '../middleware/post/getPost.js';
import getPostController from '../controller/post/getPost.js';

import createPostMiddleware from '../middleware/post/createPost.js';
import createPostController from '../controller/post/createPost.js';

import editPostMiddleware from '../middleware/post/editPost.js';
import editPostController from '../controller/post/editPost.js';

import checkPostPasswordMiddleware from '../middleware/post/checkPostPassword.js';
import checkPostPasswordController from '../controller/post/checkPostPassword.js';

import deletePostMiddleware from '../middleware/post/deletePost.js';
import deletePostController from '../controller/post/deletePost.js';

import errorHandler from '../errorHandler/errorHandler.js';

const postRouter = express.Router();
postRouter
  .get(
    '/:postId',
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
    '/:postId/checkPostPassword',
    asyncHandler(checkPostPasswordMiddleware),
    asyncHandler(checkPostPasswordController),
    errorHandler
  )
  .patch(
    '/:postId',
    asyncHandler(editPostMiddleware),
    asyncHandler(editPostController),
    errorHandler
  )
  .delete(
    '/:postId',
    asyncHandler(deletePostMiddleware),
    asyncHandler(deletePostController),
    errorHandler
  );

export default postRouter;