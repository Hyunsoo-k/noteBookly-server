import express from 'express';
import dotenv from 'dotenv';
import mongoose, { Error } from 'mongoose';
import cors from 'cors';

import postRouter from '../src/routes/post.js';
import postListRouter from '../src/routes/post-list.js';

dotenv.config();

mongoose
  .connect(process.env.DATABASE_URL as string, { autoIndex: false })
  .then((): void => { console.log('connected to mongoDb'); })
  .catch((err: Error): void => { console.log('Error connecting to MongoDB', err); });

const app = express();
app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = [
      process.env.FRONT_END_DEVELOP_URL,
      process.env.FRONT_END_PRODUCTION_URL,
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}));
app.options('*', cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/post', postRouter);
app.use('/post-list', postListRouter);

export default app;