import {UserType} from './userType';

interface MessageProps {
  text: string;
  images: string[];
  file: string;
}

export enum messageStatus {
  seen = 'seen',
  send = 'send',
}

export interface MessageType {
  _id?: string;
  message: MessageProps;
  user: string | UserType;
  sender: string | UserType;
  lastMessage: string;
  status: messageStatus;
  createdAt?: string;
  updatedAt?: string;
}
