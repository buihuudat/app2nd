import {UserType} from './userType';

interface LocationProp {
  city: string;
  district: string;
}

export enum PostProductStatusProps {
  pending = 'pending',
  success = 'success',
  access = 'access',
  done = 'done',
  refure = 'refure',
}

export interface PostProductType {
  _id?: string;
  user: UserType | string;
  location: LocationProp;
  images: [{url: string}];
  title: string;
  price: number;
  category: string;
  description: string;
  status: PostProductStatusProps;
  createdAt?: string;
  updatedAt?: string;
}
