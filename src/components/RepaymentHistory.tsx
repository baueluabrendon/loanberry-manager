import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

// Mock data - replace with actual data in production
const repayments = [
  {
    id: 1,
    date: "2024-02-20",
    loanNumber: "12345",
    amount: 1500,
    receiptUrl: "#",
    status: "Verified",
  },
  {
    id: 2,
    date: "2024-02-15",
    loanNumber: "12345",
    amount: 1500,
    receiptUrl: "#",
    status: "Pending",
  },
  {
    id: 3,
    date: "2024-02-10",
    loanNumber: "67890",
    amount: 2000,
    receiptUrl: "#",
    status: "Verified",
  },
];

export function RepaymentHistory() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Loan Number</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Receipt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {repayments.map((repayment) => (
            <TableRow key={repayment.id}>
              <TableCell>{repayment.date}</TableCell>
              <TableCell>{repayment.loanNumber}</TableCell>
              <TableCell>${repayment.amount.toLocaleString()}</TableCell>
              <TableCell>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    repayment.status === "Verified"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {repayment.status}
                </span>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  <FileText className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}