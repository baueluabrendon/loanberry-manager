import { AppSidebar } from "@/components/AppSidebar";
import { Navigation } from "@/components/Navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, CreditCard, Calendar } from "lucide-react";

const ClientPortal = () => {
  const analytics = {
    totalLoans: 3,
    activeLoans: 1,
    totalBalance: 15000,
    nextPayment: "2024-04-01",
    nextPaymentAmount: 500,
    totalRepaid: 5000,
  };

  const borrowerDetails = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 w-full z-50 bg-white">
        <Navigation />
      </div>
      <div className="pt-16">
        <SidebarProvider>
          <div className="container mx-auto px-4 py-8 flex gap-6">
            <AppSidebar />
            <div className="flex-1 space-y-6">
              <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
              
              {/* Analytics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Total Loans</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{analytics.totalLoans}</div>
                    <p className="text-xs text-muted-foreground">
                      {analytics.activeLoans} active loans
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      ${analytics.totalBalance.toLocaleString()}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      ${analytics.totalRepaid.toLocaleString()} repaid
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Next Payment</CardTitle>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      ${analytics.nextPaymentAmount.toLocaleString()}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Due on {analytics.nextPayment}
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Borrower Info</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm font-medium">{borrowerDetails.name}</div>
                    <p className="text-xs text-muted-foreground">
                      {borrowerDetails.email}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default ClientPortal;