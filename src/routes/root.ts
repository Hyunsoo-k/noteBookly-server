import express from 'express';
import asyncHandler from 'express-async-handler';

import getRoot from '@/controller/root/get-root.js';
import errorHandler from '@/error-handler/error-handler.js';

const rootRouter = express.Router();
rootRouter
  .get(
    '/',
    asyncHandler(getRoot),
    errorHandler
  );

export default rootRouter;