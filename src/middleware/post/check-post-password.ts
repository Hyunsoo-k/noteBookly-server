import type { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

import PostModel from '@/model/post.js';

const checkPostPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const post_id = req.params.post_id;
  const post = await PostModel.findById(post_id);
  if (!post) {
    return res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
  }

  const { password } = req.body;
  const isPasswordCorrect = await bcrypt.compare(password, post.password);
  if (!isPasswordCorrect) {
    return res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' });
  }

  dotenv.config();
  const token = jwt.sign(
    { post_id },
    process.env.JWT_SECRET_KEY as string,
    { expiresIn: '5m' }
  );
  res.locals.token = token;
  next();
};

export default checkPostPassword;