import {PostProductType} from './constants/types/postProductType';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Splash: undefined;
  Category: {posts: Array<PostProductType>};
  PostManager: undefined;
  PostDetails: {post: PostProductType};
  Message: undefined;
  Profile: undefined;
  Favorite: undefined;

  HomeTab: undefined;
  Search: undefined;
};
