import type { Request, Response } from 'express';

const createPost = async (req: Request, res: Response): Promise<any> => {
  const { newPost } = res.locals;
  return res.status(201).json(newPost)
};

export default createPost;