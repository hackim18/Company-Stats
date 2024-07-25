import { ObjectId } from "mongodb";

export type Company = {
  _id: ObjectId;
  companyName: string;
  revenues: Array<Revenue>;
};

export type Revenue = {
  month: string;
  revenue: number;
  expenses: number;
  profit: number;
  numberOfTransactions: number;
  marketShare: string;
  employeeCount: number;
};
