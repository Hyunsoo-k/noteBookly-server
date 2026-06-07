import type { Request, Response } from 'express';

const createPostController = async (req: Request, res: Response): Promise<any> => {
  const { createdPost } = res.locals;

  return res.status(201).json(createdPost)
};

export default createPostController;