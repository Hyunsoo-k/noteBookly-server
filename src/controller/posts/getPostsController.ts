import type { Request, Response } from "express";
import type { QueryOptions } from "mongoose";

import type { PostWithoutPassword } from "../../types/post.js";
import PostModel from "../../model/post.js";
import optimizePost from "../../utils/optimizePost.js";

const getPostsController = async (
  req: Request,
  res: Response
): Promise<any> => {
  const filter = res.locals.dbFilter || {};
  
  const projectionPassword: QueryOptions['projection'] = { password: 0 };

  const limit = 8;

  const posts: PostWithoutPassword[] = await PostModel
    .find(filter, projectionPassword)
    .sort({ _id: -1 })
    .limit(limit + 1)
    .lean();
    
  const hasNextPage: boolean = posts.length > limit;

  if (hasNextPage) {
    posts.pop();
  }

  const optimizedPostList = await Promise.all(
    posts.map((post: PostWithoutPassword) => optimizePost(post))
  );

  return res.status(200).json({
    posts: optimizedPostList,
    hasNextPage
  });
};

export default getPostsController;