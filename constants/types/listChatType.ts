import {UserType} from './userType';

export interface ListChatType {
  userId: string | UserType;
  userChat: Array<string | UserType>;
}
