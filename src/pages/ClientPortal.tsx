import { Navigation } from "@/components/Navigation";
import { ApplicationStatus } from "@/components/ApplicationStatus";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { CalendarIcon, CreditCard, DollarSign, Users } from "lucide-react";

const ClientPortal = () => {
  // Mock data - in a real app, this would come from an API
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    joinedDate: "January 2024",
    creditScore: 750
  };

  const accountSummary = {
    totalLoans: 2,
    activeLoans: 1,
    totalBalance: 40000,
    nextPayment: "2024-03-01",
    nextPaymentAmount: 1250
  };

  const recentApplications = [
    { status: "pending", date: "2024-02-20", amount: 25000 },
    { status: "approved", date: "2024-01-15", amount: 15000 },
    { status: "reviewing", date: "2024-02-18", amount: 50000 },
  ] as const;

  const repaymentSchedule = [
    { date: "2024-03-01", amount: 1250, status: "upcoming" },
    { date: "2024-04-01", amount: 1250, status: "upcoming" },
    { date: "2024-05-01", amount: 1250, status: "upcoming" },
    { date: "2024-06-01", amount: 1250, status: "upcoming" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        {/* User Profile Section */}
        <div className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{userProfile.name}</h1>
                <p className="text-gray-500">{userProfile.email}</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-sm text-gray-500">Member since</p>
                <p className="font-medium">{userProfile.joinedDate}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Loans</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{accountSummary.totalLoans}</div>
              <p className="text-xs text-muted-foreground">
                {accountSummary.activeLoans} active
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${accountSummary.totalBalance.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                Next payment: ${accountSummary.nextPaymentAmount}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Next Payment</CardTitle>
              <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{accountSummary.nextPayment}</div>
              <p className="text-xs text-muted-foreground">Due date</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Credit Score</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userProfile.creditScore}</div>
              <p className="text-xs text-muted-foreground">Updated today</p>
            </CardContent>
          </Card>
        </div>

        {/* Repayment Schedule */}
        {accountSummary.activeLoans > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Loan Repayment Schedule</h2>
            <Card>
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
            </Card>
          </div>
        )}

        {/* Recent Applications */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Applications</h2>
          <div className="grid gap-4">
            {recentApplications.map((application, index) => (
              <ApplicationStatus
                key={index}
                status={application.status}
                date={application.date}
                amount={application.amount}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientPortal;