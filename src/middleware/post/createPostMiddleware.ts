import type { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';

const createPostMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { password, title, content, writer } = req.body;

    if (!title || !content || !writer) {
      return res.status(400).json({ message: '제목, 내용, 작성자는 필수 입력 항목입니다.' });
    }

    if (!password || password.trim().length < 4 || password.trim().length > 15) {
      return res.status(400).json({ message: '비밀번호는 4자 이상 15자 이하 이어야 합니다.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    res.locals.sanitizedBody = {
      ...req.body,
      password: hashedPassword
    };
    
    next();
  } catch (error) {
    next(error);
  }
};

export default createPostMiddleware;