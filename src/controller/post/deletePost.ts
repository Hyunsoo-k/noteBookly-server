import { Request, Response } from 'express';

const deletePost = async (req: Request, res: Response): Promise<any> => {
  return res.status(204);
};

export default deletePost;