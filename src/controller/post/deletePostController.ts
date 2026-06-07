import type { Request, Response, NextFunction } from 'express';

import PostModel from '../../model/post.js';

const deletePostController = async (
  req: Request, 
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { postId } = req.params;

    await PostModel.findByIdAndDelete(postId);

    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export default deletePostController;