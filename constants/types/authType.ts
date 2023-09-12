import { sex } from "./userType";

export interface LoginType {
  email: string;
  password: string;
}

export interface RegisterType {
  msv: string;
  fullname: {
    firstname: string;
    lastname: string;
  };
  email: string;
  phone: string;
  sex: sex;
  password: string;
  confirmPassword?: string;
}
