import { Request, Response } from 'express';

const checkPasswordController = async (req: Request, res: Response): Promise<any> => {
  const { token } = res.locals;
  
  return res.status(200).json({ token });
};

export default checkPasswordController;