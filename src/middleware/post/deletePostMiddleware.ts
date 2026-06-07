import type { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';

import PostModel from "../../model/post.js";

const deletePostMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { postId } = req.params;
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ message: "비밀번호를 입력해 주세요." });
    }

    const post = await PostModel.findById(postId).lean();

    if (!post) {
      return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
    }

    const isPasswordCorrect = await bcrypt.compare(password, post.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "비밀번호가 일치하지 않습니다." });
    }

    next();
  } catch (error) {
    next(error);
  }
};

export default deletePostMiddleware;