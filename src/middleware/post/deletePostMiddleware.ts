import type { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';

import PostModel from "../../model/post.js";

const deletePostMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const postId = req.params.postId;
  
  const { password } = req.body;

  const post = await PostModel.findById(postId).lean();

  if (!post) {
    return res.status(404).send({ message: "게시글을 찾을 수 없습니다." });
  }

  const isPasswordCorrect = await bcrypt.compare(password, post.password);

  if (!isPasswordCorrect) {
    return res.status(401).send({ message: "비밀번호가 일치하지 않습니다. "});
  }

  await PostModel.findByIdAndDelete(postId);

  next();
};

export default deletePostMiddleware;