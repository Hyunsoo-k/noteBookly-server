import express from 'express';
import asyncHandler from 'express-async-handler';

import getPostMiddleWare from '../middleware/post/getPostMiddleware.js';
import getPostController from '../controller/post/getPostController.js';

import createPostMiddleware from '../middleware/post/createPostMiddleware.js';
import createPostController from '../controller/post/createPostController.js';

import editPostMiddleware from '../middleware/post/editPostMiddleware.js';
import editPostController from '../controller/post/editPostController.js';

import checkPostPasswordMiddleware from '../middleware/post/checkPasswordMiddleware.js';
import checkPostPasswordController from '../controller/post/checkPasswordController.js';

import deletePostMiddleware from '../middleware/post/deletePostMiddleware.js';
import deletePostController from '../controller/post/deletePostController.js';

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