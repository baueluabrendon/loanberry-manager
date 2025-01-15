import { Navigation } from "@/components/Navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet, useLocation } from "react-router-dom";
import { PersonalDetails } from "@/components/profile/PersonalDetails";
import { AccountSummary } from "@/components/profile/AccountSummary";

const ClientPortal = () => {
  const location = useLocation();
  const isRepayments = location.pathname.includes('/repayments');

  // Mock data - in a real app, this would come from an API
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
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
                <PersonalDetails userProfile={userProfile} />
                <AccountSummary 
                  accountSummary={accountSummary}
                  loanHistory={loanHistory}
                />
              </>
            )}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ClientPortal;