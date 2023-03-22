export enum Gender {
  Male,
  Female,
}
export enum AccountType {
  Savings,
  Checking,
  MoneyMarketAccount,
  CertificateOfDeposit,
}
export interface Customer {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  address: string;
  city: string;
  phoneNumber: string;
  accountType: string;
  accountNumber: number;
  deposit: number;
}

export interface CustomerForm {
  firstName?: string;
  lastName?: string;
  email?: string;
  gender?: string;
  address?: string;
  city?: string;
  phoneNumber?: string;
  accountType?: string;
  accountNumber?: number;
  deposit?: number;
}
