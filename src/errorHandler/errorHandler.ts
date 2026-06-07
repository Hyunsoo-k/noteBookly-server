import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

const errorHandler = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  console.log('err', err);

  if (err instanceof mongoose.Error.ValidationError) {
    const errors = err.errors;
    const firstError = errors[Object.keys(errors)[0]];
    const firsrErrorMessage = firstError.message;
    return res.status(400).json({ message: firsrErrorMessage });
  }

  return res.status(500).json(err);
};

export default errorHandler;