import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Printer, Mail, ArrowLeft, RefreshCw } from "lucide-react";

interface LoanDetailsFormProps {
  showRepaymentSchedule: boolean;
  setShowRepaymentSchedule: (show: boolean) => void;
  handlePrint: () => void;
  handleEmail: () => void;
  repaymentSchedule: Array<{
    date: string;
    amount: number;
    status: string;
  }>;
  canRefinance: boolean;
}

export const LoanDetailsForm = ({
  showRepaymentSchedule,
  setShowRepaymentSchedule,
  handlePrint,
  handleEmail,
  repaymentSchedule,
  canRefinance,
}: LoanDetailsFormProps) => {
  return (
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
                  <Button variant="outline" onClick={handlePrint}>
                    <Printer className="h-4 w-4 mr-2" />
                    Print
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Print repayment schedule</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" onClick={handleEmail}>
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Email repayment schedule</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" disabled={!canRefinance}>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Refinance
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {canRefinance
                    ? "Apply for refinancing"
                    : "80% of current loan must be repaid before refinancing"}
                </TooltipContent>
              </Tooltip>
            </div>

            <Button variant="ghost" onClick={() => setShowRepaymentSchedule(false)}>
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