import type { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import PostModel from '../../model/post.js';

const checkPasswordMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { postId } = req.params;

    const post = await PostModel.findById(postId);

    if (!post) {
      return res.status(404).json({ message: '게시글을 찾을 수 없습니다.' });
    }

    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ message: '비밀번호를 입력해 주세요.' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, post.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' });
    }

    const secretKey = process.env.JWT_SECRET_KEY;

    if (!secretKey) {
      return res.status(500).json({ message: '서버 환경 변수 설정에 오류가 있습니다.' });
    }

    const token = jwt.sign({ postId }, secretKey, { expiresIn: '5m' });

    res.locals.token = token;
    
    next();
  } catch (error) {
    next(error);
  }
};

export default checkPasswordMiddleware;