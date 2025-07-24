import type { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';

import PostModel from '@/model/post.js';

const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const { password } = req.body;
  if (password.trim().length < 4 || password.trim().length > 15) {
    res.status(400).json({ message: '비밀번호는 4자 이상 15자 이하 이어야 합니다.' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const newPost = await PostModel.create({
    ...req.body,
    password: hashedPassword
  });
  res.locals.newPost = newPost;
  next();
};

export default createPost;
