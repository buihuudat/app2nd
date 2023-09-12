import {PostProductType} from './postProductType';

export interface FavoriteType {
  _id?: string;
  userId: string;
  posts: Array<PostProductType | string>;
  createdAt?: string;
  updatedAt?: string;
}
