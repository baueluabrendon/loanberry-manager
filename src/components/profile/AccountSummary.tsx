import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { RepaymentScheduleDialog } from "./RepaymentScheduleDialog";

interface AccountSummaryProps {
  accountSummary: {
    totalLoans: number;
    activeLoans: number;
    totalBalance: number;
    nextPayment: string;
    nextPaymentAmount: number;
    totalRepaid: number;
    loanLimit: number;
  };
  loanHistory: Array<{
    id: string;
    amount: number;
    dateIssued: string;
    status: string;
    repaidAmount: number;
  }>;
}

export const AccountSummary = ({ accountSummary, loanHistory }: AccountSummaryProps) => {
  const [showRepaymentSchedule, setShowRepaymentSchedule] = useState(false);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Loan Information</CardTitle>
          <Button onClick={() => setShowRepaymentSchedule(true)}>
            View Repayment Schedule
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-4 mb-6">
            <div>
              <p className="text-sm text-gray-500">Total Loans</p>
              <p className="text-2xl font-bold">{accountSummary.totalLoans}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Loans</p>
              <p className="text-2xl font-bold">{accountSummary.activeLoans}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Balance</p>
              <p className="text-2xl font-bold">${accountSummary.totalBalance.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Next Payment</p>
              <p className="text-2xl font-bold">${accountSummary.nextPaymentAmount.toLocaleString()}</p>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-4">Loan History</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Loan ID</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date Issued</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Repaid Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loanHistory.map((loan) => (
                <TableRow key={loan.id}>
                  <TableCell>{loan.id}</TableCell>
                  <TableCell>${loan.amount.toLocaleString()}</TableCell>
                  <TableCell>{loan.dateIssued}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      loan.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {loan.status}
                    </span>
                  </TableCell>
                  <TableCell>${loan.repaidAmount.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <RepaymentScheduleDialog
        open={showRepaymentSchedule}
        onOpenChange={setShowRepaymentSchedule}
        accountSummary={accountSummary}
      />
    </div>
  );
};