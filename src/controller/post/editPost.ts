import { Request, Response } from 'express';

const editPost = async (req: Request, res: Response): Promise<any> => {
  const { editedPost } = res.locals;
  return res.status(200).json(editedPost);
};

export default editPost;