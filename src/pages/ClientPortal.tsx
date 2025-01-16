import { AppSidebar } from "@/components/AppSidebar";
import { ProfileDetails } from "@/components/profile/ProfileDetails";
import { AccountSummary } from "@/components/profile/AccountSummary";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Navigation } from "@/components/Navigation";

const mockPersonalDetails = {
  givenName: "John",
  surname: "Doe",
  dateOfBirth: "1990-01-01",
  gender: "Male",
  mobileNumber: "+1234567890",
  email: "john.doe@example.com",
};

const mockAccountSummary = {
  totalLoans: 3,
  activeLoans: 1,
  totalAmount: 15000,
  repaidAmount: 5000,
  nextPaymentDate: "2024-04-01",
  nextPaymentAmount: 500,
};

const mockLoanHistory = [
  {
    id: 1,
    amount: 10000,
    dateApproved: "2023-12-01",
    status: "active",
    repaidAmount: 5000,
  },
];

const ClientPortal = () => {
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
              <ProfileDetails formData={mockPersonalDetails} />
              <AccountSummary 
                accountSummary={mockAccountSummary}
                loanHistory={mockLoanHistory}
              />
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default ClientPortal;