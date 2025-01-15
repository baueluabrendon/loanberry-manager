import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";
import { Printer, Mail, ArrowLeft, RefreshCw } from "lucide-react";
import { useState } from "react";

const Loans = () => {
  const { toast } = useToast();
  const [showRepaymentSchedule, setShowRepaymentSchedule] = useState(false);

  // Mock data - in a real app, this would come from an API
  const loanHistory = [
    { id: "L001", amount: 40000, dateIssued: "2024-01-15", status: "active", repaidAmount: 32000 },
    { id: "L002", amount: 25000, dateIssued: "2023-06-10", status: "completed", repaidAmount: 25000 },
  ];

  const repaymentSchedule = [
    { date: "2024-03-01", amount: 1250, status: "upcoming" },
    { date: "2024-04-01", amount: 1250, status: "upcoming" },
    { date: "2024-05-01", amount: 1250, status: "upcoming" },
  ];

  const canRefinance = (repaidAmount: number, totalAmount: number) => {
    return (repaidAmount / totalAmount) >= 0.8;
  };

  const handlePrint = () => {
    toast({
      title: "Print Requested",
      description: "Preparing repayment schedule for printing...",
    });
    window.print();
  };

  const handleEmail = () => {
    toast({
      title: "Email Sent",
      description: "Repayment schedule has been sent to your email.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Button onClick={() => setShowRepaymentSchedule(true)}>
          View Repayment Schedule
        </Button>
      </div>

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

      <Dialog open={showRepaymentSchedule} onOpenChange={setShowRepaymentSchedule}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Repayment Schedule</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <div className="space-x-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      onClick={handlePrint}
                    >
                      <Printer className="h-4 w-4 mr-2" />
                      Print
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Print repayment schedule
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      onClick={handleEmail}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Email repayment schedule
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      disabled={!canRefinance(32000, 40000)}
                    >
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refinance
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    {canRefinance(32000, 40000)
                      ? "Apply for refinancing"
                      : "80% of current loan must be repaid before refinancing"}
                  </TooltipContent>
                </Tooltip>
              </div>

              <Button
                variant="ghost"
                onClick={() => setShowRepaymentSchedule(false)}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Exit
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Payment Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {repaymentSchedule.map((payment, index) => (
                  <TableRow key={index}>
                    <TableCell>{payment.date}</TableCell>
                    <TableCell>${payment.amount.toLocaleString()}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {payment.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Loans;