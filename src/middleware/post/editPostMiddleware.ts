import type { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';

import PostModel from "../../model/post.js";

const editPostMiddleware = async (
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

    if (!password || password.trim().length < 4 || password.trim().length > 15) {
      return res.status(400).json({ message: '비밀번호는 4자 이상 15자 이하 이어야 합니다.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    res.locals.updateData = {
      ...req.body,
      password: hashedPassword,
      isEdited: true
    };

    next();
  } catch (error) {
    next(error);
  }
};

export default editPostMiddleware;