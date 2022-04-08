export interface IUser {
  id: number;
  name: string;
  address: IAddress;
}

interface IAddress {
  streetName: string;
  streetNumber: number;
  postalCode: string;
  town: string;
}
