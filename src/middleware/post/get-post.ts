import type { NextFunction, Request, Response } from 'express';
import type { QueryOptions } from 'mongoose';

import PostModel from '@/model/post.js';

const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const post_id = req.params.post_id;
  const projectionPassword: QueryOptions['projection'] = { password: 0 };
  const post = await PostModel.findById(post_id, projectionPassword).lean();
  if (!post) {
    res.status(404).send({ message: '게시글을 찾을 수 없습니다.' });
  }
  res.locals.post = post;
  next();
};

export default getPost