import { Request, Response } from 'express';

const checkPostPassword = async (req: Request, res: Response): Promise<any> => {
  const { token } = res.locals;
  return res.status(200).json({ token });
};

export default checkPostPassword;