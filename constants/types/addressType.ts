export interface AddressType {
  city: string;
  district: string;
  ward: string;
  street: string;
  more: string;
}

export const address = (address: AddressType | undefined) =>
  address?.more +
  ' ' +
  address?.street +
  ' ' +
  address?.ward +
  ' ' +
  address?.district +
  ' ' +
  address?.city;
