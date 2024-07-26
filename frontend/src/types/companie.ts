export type Company = {
  _id: string;
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
