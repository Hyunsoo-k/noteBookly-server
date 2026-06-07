import type { Request, Response } from 'express';

const checkPasswordController = async (req: Request, res: Response): Promise<any> => {
  const { token } = res.locals;
  
  if (!token) {
    return res.status(400).json({ message: '인증 토큰이 생성되지 않았습니다.' });
  }
  
  return res.status(200).json({ token });
};

export default checkPasswordController;