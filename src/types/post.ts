import { Types } from "mongoose";

interface Post {
  _id: Types.ObjectId;
  author: string;
  password: string;
  title: string;
  subTitle: string;
  headerAlign: "left" | "center";
  content: string;
  isEdited: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

interface PostWithoutPassword {
  _id: Types.ObjectId;
  author: string;
  title: string;
  subTitle: string;
  headerAlign: "left" | "center";
  content: string;
  isEdited: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export type { Post, PostWithoutPassword };
