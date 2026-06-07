import type { Request, Response, NextFunction } from 'express';

import PostModel from '../../model/post.js';

const createPostController = async (
  req: Request, 
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { sanitizedBody } = res.locals;

    if (!sanitizedBody) {
      return res.status(500).json({ message: '등록할 데이터가 유실되었습니다.' });
    }

    const createdPost = await PostModel.create(sanitizedBody);

    return res.status(201).json(createdPost);
  } catch (error) {
    next(error);
  }
};

export default createPostController;