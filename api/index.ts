import type { Error } from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import postRouter from '../src/routes/post.js';
import postsRouter from '../src/routes/posts.js';

dotenv.config();

mongoose
  .connect(process.env.DATABASE_URL as string, { autoIndex: false })
  .then((): void => { console.log('connected to mongoDb'); })
  .catch((err: Error): void => { console.log('Error connecting to MongoDB', err); });

const app = express();
app.use(cors({
  origin: [
    process.env.FRONT_END_DEVELOP_URL as string,
    process.env.FRONT_END_PRODUCTION_URL as string
  ]
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/post', postRouter);
app.use('/posts', postsRouter);

export default app;