import type { Request, Response } from 'express';

const getPostController = async (req: Request, res: Response): Promise<any> => {
  const { post } = res.locals;

  return res.status(200).json(post);
};

export default getPostController;