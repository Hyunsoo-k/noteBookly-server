import { Request, Response } from 'express';

const getPostList = async (req: Request, res: Response): Promise<any> => {
  const { postList, hasNextPage } = res.locals;
  return res.status(200).json({
    postList,
    hasNextPage
  });
};

export default getPostList;