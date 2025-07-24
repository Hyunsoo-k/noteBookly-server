import mongoose from "mongoose";
import dotenv from 'dotenv';

import PostModel from "@/model/post.js";

dotenv.config();
mongoose
  .connect(
    process.env.DATABASE_URL as string,
    { autoIndex: false }
  )
  .then((): void => { console.log('connected to mongoDb'); })
  .catch((err: Error): void => { console.log('Error connecting to MongoDB', err); });

const deleteUnuseless = (): void => {
  PostModel
  .deleteMany({ title: { $regex: '테스트10', $options: "i" } })
  .then(result => { console.log(result); })
  .catch(err => { console.log('err' + err)});
};

deleteUnuseless();