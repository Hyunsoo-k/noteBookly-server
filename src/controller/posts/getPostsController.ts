import { Request, Response } from 'express';

const getPostsController = async (req: Request, res: Response): Promise<any> => {
  const { posts, hasNextPage } = res.locals;
  return res.status(200).json({
    posts,
    hasNextPage
  });
};

export default getPostsController;