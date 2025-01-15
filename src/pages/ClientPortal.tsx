import { Navigation } from "@/components/Navigation";
import { ApplicationStatus } from "@/components/ApplicationStatus";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { CalendarIcon, CreditCard, DollarSign, Users, Printer, Mail, ArrowLeft, RefreshCw } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";

const ClientPortal = () => {
  const location = useLocation();
  const isRepayments = location.pathname.includes('/repayments');
  const { toast } = useToast();
  const [showRepaymentSchedule, setShowRepaymentSchedule] = useState(false);

  // Mock data - in a real app, this would come from an API
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    joinedDate: "January 2024",
    creditScore: 750,
    phone: "+1234567890",
    address: "123 Main St, City, State",
  };

  const accountSummary = {
    totalLoans: 2,
    activeLoans: 1,
    totalBalance: 40000,
    nextPayment: "2024-03-01",
    nextPaymentAmount: 1250,
    totalRepaid: 32000, // 80% of 40000
    loanLimit: 40000
  };

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
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <div className="flex-1">
          <Navigation />
          <main className="container mx-auto px-4 py-8">
            {isRepayments ? (
              <Outlet />
            ) : (
              <>
                {/* Personal Details Section */}
                <div className="mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Users className="mr-2 h-5 w-5" />
                        Personal Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="font-medium">{userProfile.name}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{userProfile.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">{userProfile.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="font-medium">{userProfile.address}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Loan Information Section */}
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
                </div>

                {/* Repayment Schedule Dialog */}
                <Dialog open={showRepaymentSchedule} onOpenChange={setShowRepaymentSchedule}>
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
              </>
            )}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ClientPortal;