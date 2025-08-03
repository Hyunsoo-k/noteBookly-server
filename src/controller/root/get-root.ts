import { Request, Response } from 'express';

const getRoot = async (req: Request, res: Response): Promise<any> => {
  return res.json({ message: 'wellcome to noteBookly-server' });
};

export default getRoot;