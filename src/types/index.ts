export interface Partner {
  id: string;
  name: string;
  percentage: number;
}

export interface MonthlyData {
  month: number;
  year: number;
  totalCash: number;
  profit: number;
  partnerContributions: PartnerContribution[];
  companyValue: number;
}

export interface PartnerContribution {
  partnerId: string;
  investmentAmount: number;
  cashAmount: number;
  contributionType: 'investment' | 'cash' | 'partial';
}

export interface SimulationData {
  partners: Partner[];
  simulationYears: number;
  monthlyData: MonthlyData[];
  createdAt: Date;
  updatedAt: Date;
}

export interface SimulationSummary {
  totalProfitLoss: number;
  totalInvestments: number;
  totalCashContributions: number;
  finalCompanyValue: number;
  averageMonthlyProfit: number;
  partnersROI: { partnerId: string; roi: number }[];
}

export type PageName = 'setup' | 'simulation' | 'charts' | 'summary' | 'export';