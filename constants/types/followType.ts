import {UserType} from './userType';

export interface FollowType {
  userId: string | UserType;
  follower: Array<string | UserType>;
  following: Array<string | UserType>;
}
