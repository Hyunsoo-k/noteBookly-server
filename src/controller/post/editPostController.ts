import type { Request, Response, NextFunction } from 'express';

import PostModel from '../../model/post.js';

const editPostController = async (
  req: Request, 
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { postId } = req.params;
    const { updateData } = res.locals;

    const editedPost = await PostModel.findByIdAndUpdate(
      postId,
      { $set: updateData },
      { new: true }
    ).lean();

    return res.status(200).json(editedPost);
  } catch (error) {
    next(error);
  }
};

export default editPostController;