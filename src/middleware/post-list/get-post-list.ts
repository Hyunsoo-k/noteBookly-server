import type { NextFunction, Request, Response } from "express";
import type { QueryOptions } from "mongoose";
import { Types } from 'mongoose';

import PostModel from "@/model/post.js";
import type { PostWithoutPassword } from "@/types/post.js";
import optimizePost from "@/utils/optimize-post.js";

interface Query {
  select?: 'writer' | 'titleAndContent';
  query?: string;
  cursor?: string;
};

const getPostList = async(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const { select, query, cursor }: Query = req.query;

  let filter = {};
  const projectionPassword: QueryOptions['projection'] = { password: 0 };
  const limit = 8;

  if (select || query) {
    if (select !== 'writer' && select !== 'titleAndContent') {
      return res.status(400).json({ message: '잘못된 검색 옵션 입니다.' });
    }

    if (!query || query.trim().length < 2) {
      return res.status(400).json({ message: '검색어는 2글자 이상이어야 합니다.' });
    }

    if (select === 'writer') {
      filter = {
        ...filter,
        writer: { $regex: query, $option: 'i'}
      }
    } else if (select === 'titleAndContent') {
      filter = {
        ...filter,
        $or: [
          { title: { $regex: query, $options: "i" } },
          { content: { $regex: query, $options: "i" } }
        ]
      }
    }
  }

  if (cursor) {
    filter = {
      ...filter,
      _id: { $lt: new Types.ObjectId(String(cursor)) }
    }
  }

  const postList: PostWithoutPassword[] = await PostModel
   .find(filter, projectionPassword)
   .sort({ _id: -1 })
   .limit(limit + 1)
   .lean();
   
  const hasNextPage: boolean = postList.length > limit;
  if (hasNextPage) {
    postList.pop();
  }

  const optimizedPostList
    = await Promise.all(postList.map((post: PostWithoutPassword) => optimizePost(post)));
  res.locals.postList = optimizedPostList;
  res.locals.hasNextPage = hasNextPage;
  next();
};

export default getPostList;