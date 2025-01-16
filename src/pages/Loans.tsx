import { Button } from "@/components/ui/button";
import { AppSidebar } from "@/components/AppSidebar";
import { Navigation } from "@/components/Navigation";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { useToast } from "@/hooks/use-toast";
import { LoanDetailsForm } from "@/components/forms/loan/LoanDetailsForm";
import { LoanHistoryTable } from "@/components/forms/loan/LoanHistoryTable";
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
    return repaidAmount / totalAmount >= 0.8;
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
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 w-full z-50 bg-white">
        <Navigation />
      </div>
      <SidebarProvider>
        <div className="pt-16 flex w-full">
          <AppSidebar />
          <SidebarInset className="flex-1">
            <div className="container mx-auto px-4 py-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <Button onClick={() => setShowRepaymentSchedule(true)}>
                    View Repayment Schedule
                  </Button>
                </div>

                <LoanHistoryTable loans={loanHistory} />

                <LoanDetailsForm
                  showRepaymentSchedule={showRepaymentSchedule}
                  setShowRepaymentSchedule={setShowRepaymentSchedule}
                  handlePrint={handlePrint}
                  handleEmail={handleEmail}
                  repaymentSchedule={repaymentSchedule}
                  canRefinance={canRefinance(32000, 40000)}
                />
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Loans;