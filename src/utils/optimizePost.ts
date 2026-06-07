import * as cheerio from 'cheerio';

import type { PostWithoutPassword } from '../types/post.js';

const optimizePost = async (post: PostWithoutPassword) => {
  const { title, content } = post;
  const $title = cheerio.load(title);
  const optimizedTitle = $title.text();
  const $content = cheerio.load(content);
  const optimizedContent = $content.text().slice(0, 250);

  return {
    ...post,
    title: optimizedTitle,
    content: optimizedContent
  }
};

export default optimizePost;