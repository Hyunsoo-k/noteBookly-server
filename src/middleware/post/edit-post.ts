import type { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';

import PostModel from "@/model/post.js";

const editPost = async (
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
  if (password.trim().length < 4 || password.trim().length > 15) {
    res.status(400).json({ message: '비밀번호는 4자 이상 15자 이하 이어야 합니다.' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const editedPost = await PostModel
    .findByIdAndUpdate(
      post_id,
      {
        $set: {
          ...req.body,
          password: hashedPassword,
          isEdited: true
        },
      },
      { new: true }
    )
    .lean();
  res.locals.editedPost = editedPost;
  next();
};

export default editPost;