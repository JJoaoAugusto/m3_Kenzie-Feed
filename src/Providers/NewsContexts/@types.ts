import { Dispatch, SetStateAction } from "react";

export interface INewsProviderProps {
  children: React.ReactNode;
}

export interface INews {
  title: string;
  description: string;
  owner: string;
  userId: number;
  id: number;
  image?: string;
  likes?: {
    userId: number;
    postId: number;
  };
}

export interface INewsContext {
  loading: boolean;
  newsList: INews[];
  selectNews: undefined | INews;
  setSelectNews: Dispatch<SetStateAction<undefined | INews>>;
  addPost: (formData: INews) => Promise<void>;
  getNewById: (id: number) => Promise<void>;
  updatePost: (formData: INews, newId: number) => Promise<void>;
  deletePost: (newId: number) => Promise<void>;
  like: (formData: INews) => Promise<void>;
  deslike: (newId: number) => Promise<void>;
  userNewsList: INews[];
  setUserNewsList: React.Dispatch<React.SetStateAction<INews[]>>;
}
