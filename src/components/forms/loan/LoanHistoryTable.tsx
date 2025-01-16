import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Loan {
  id: string;
  amount: number;
  dateIssued: string;
  status: string;
  repaidAmount: number;
}

interface LoanHistoryTableProps {
  loans: Loan[];
}

export const LoanHistoryTable = ({ loans }: LoanHistoryTableProps) => {
  return (
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
        {loans.map((loan) => (
          <TableRow key={loan.id}>
            <TableCell>{loan.id}</TableCell>
            <TableCell>${loan.amount.toLocaleString()}</TableCell>
            <TableCell>{loan.dateIssued}</TableCell>
            <TableCell>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  loan.status === "active"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {loan.status}
              </span>
            </TableCell>
            <TableCell>${loan.repaidAmount.toLocaleString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};