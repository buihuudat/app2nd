import {AddressType} from './addressType';

export enum UserRole {
  user = 'user',
  staff = 'staff',
  admin = 'admin',
}

export enum sex {
  male = 'Nam',
  fmale = 'Nữ',
  other = 'Khác',
}

export interface UserType {
  _id?: string;
  msv: string;
  fullname: {
    firstname: string;
    lastname: string;
  };
  email: string;
  phone: string;
  password?: string;
  address: AddressType;
  sex: sex;
  avatar: string;
  role: UserRole;
  createdAt?: string;
  updatedAt?: string;
}

export const fullnameOfUser = (
  fullname:
    | {
        firstname: string;
        lastname: string;
      }
    | undefined,
) => {
  return fullname?.firstname + ' ' + fullname?.lastname;
};
