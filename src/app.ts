import express from 'express';
import dotenv from 'dotenv';
import mongoose, { Error } from 'mongoose';

import postRouter from '@/routes/post.js';
import postListRouter from '@/routes/post-list.js';

dotenv.config();
mongoose
  .connect(
    process.env.DATABASE_URL as string,
    { autoIndex: false }
  )
  .then((): void => { console.log('connected to mongoDb'); })
  .catch((err: Error): void => { console.log('Error connecting to MongoDB', err); });

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/post', postRouter);
app.use('/post-list', postListRouter);

export default app;