import { Types } from 'mongoose';

interface Post {
  _id: Types.ObjectId,
  writer: string;
  password: string;
  thumbnailSrc: string;
  title: string;
  content: string;
  isEdited: boolean;
  createdAt: Date,
  updatedAt: Date,
  __v: number;
};

interface PostWithoutPassword {
  _id: Types.ObjectId,
  writer: string;
  thumbnailSrc: string;
  title: string;
  content: string;
  isEdited: boolean;
  createdAt: Date,
  updatedAt: Date,
  __v: number;
}

export type { Post, PostWithoutPassword };