import { Navigation } from "@/components/Navigation";
import { AppSidebar } from "@/components/AppSidebar";
import { ProfileDetails } from "@/components/profile/ProfileDetails";
import { AccountSummary } from "@/components/profile/AccountSummary";

const mockPersonalDetails = {
  givenName: "John",
  surname: "Doe",
  dateOfBirth: "1990-01-01",
  gender: "Male",
  mobileNumber: "+1234567890",
  email: "john.doe@example.com",
  // ... other mock data fields
};

const mockAccountSummary = {
  totalLoans: 3,
  activeLoans: 1,
  totalBalance: 15000,
  nextPayment: "2024-04-01",
  nextPaymentAmount: 500,
  totalRepaid: 5000,
  loanLimit: 25000,
};

const mockLoanHistory = [
  {
    id: "L001",
    amount: 10000,
    dateIssued: "2023-01-15",
    status: "active",
    repaidAmount: 5000,
  },
  // ... other mock loan history entries
];

const ClientPortal = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
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
    </div>
  );
};

export default ClientPortal;
