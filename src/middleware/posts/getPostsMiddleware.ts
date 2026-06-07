import type { NextFunction, Request, Response } from "express";
import { Types } from 'mongoose';

interface Query {
  select?: 'writer' | 'titleAndContent';
  query?: string;
  cursor?: string;
}

const getPostsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const { select, query, cursor }: Query = req.query;

  let filter: Record<string, any> = {};

  if (select || query) {
    if (select !== 'writer' && select !== 'titleAndContent') {
      return res.status(400).json({ message: '잘못된 검색 옵션 입니다.' });
    }

    if (!query || query.trim().length < 2) {
      return res.status(400).json({ message: '검색어는 2글자 이상이어야 합니다.' });
    }

    if (select === 'writer') {
      filter.writer = { $regex: query, $options: 'i' }; 
    } else if (select === 'titleAndContent') {
      filter.$or = [
        { title: { $regex: query, $options: "i" } },
        { content: { $regex: query, $options: "i" } }
      ];
    }
  }

  if (cursor) {
    filter._id = { $lt: new Types.ObjectId(String(cursor)) };
  }

  res.locals.dbFilter = filter;
  
  next();
};

export default getPostsMiddleware;