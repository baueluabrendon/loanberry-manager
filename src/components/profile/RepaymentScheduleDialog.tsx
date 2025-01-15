import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Printer, Mail, ArrowLeft, RefreshCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface RepaymentScheduleDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  accountSummary: {
    totalRepaid: number;
    loanLimit: number;
  };
}

export const RepaymentScheduleDialog = ({
  open,
  onOpenChange,
  accountSummary,
}: RepaymentScheduleDialogProps) => {
  const { toast } = useToast();

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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Repayment Schedule</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <div className="space-x-2">
              <TooltipProvider>
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
              </TooltipProvider>

              <TooltipProvider>
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
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      disabled={!canRefinance(accountSummary.totalRepaid, accountSummary.loanLimit)}
                    >
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refinance
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    {canRefinance(accountSummary.totalRepaid, accountSummary.loanLimit)
                      ? "Apply for refinancing"
                      : "80% of current loan must be repaid before refinancing"}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <Button
              variant="ghost"
              onClick={() => onOpenChange(false)}
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
  );
};