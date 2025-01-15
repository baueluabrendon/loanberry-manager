import { Navigation } from "@/components/Navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Outlet, useLocation } from "react-router-dom";
import { PersonalDetails } from "@/components/profile/PersonalDetails";
import { AccountSummary } from "@/components/profile/AccountSummary";
import { ApplicationDetails } from "@/components/loan-form/ApplicationDetails";

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
    totalRepaid: 32000,
    loanLimit: 40000
  };

  const loanHistory = [
    { id: "L001", amount: 40000, dateIssued: "2024-01-15", status: "active", repaidAmount: 32000 },
    { id: "L002", amount: 25000, dateIssued: "2023-06-10", status: "completed", repaidAmount: 25000 },
  ];

  // Mock personal details data that matches the ApplicationDetails structure
  const personalDetails = {
    givenName: "John",
    surname: "Doe",
    dateOfBirth: "1990-01-01",
    gender: "Male",
    mobileNumber: "+1234567890",
    email: "john.doe@example.com",
    village: "Downtown",
    district: "Central",
    province: "State",
    nationality: "USA",
    department: "Finance",
    fileNumber: "EMP123",
    postalAddress: "PO Box 123",
    workPhone: "+1987654321",
    fax: "123-456-789",
    dateEmployed: "2020-01-15",
    paymaster: "ABC Corp",
    lot: "45",
    section: "B",
    suburb: "Westside",
    streetName: "Main Street",
    maritalStatus: "Married",
    spouseLastName: "Doe",
    spouseFirstName: "Jane",
    spouseEmployer: "XYZ Inc",
    spouseContact: "+1122334455",
    bank: "National Bank",
    bankBranch: "Downtown",
    bsbCode: "123456",
    accountName: "John Doe",
    accountNumber: "987654321",
    accountType: "Savings",
    purpose: "Home Renovation",
    loanAmount: 40000,
    pvaAmount: 42000,
    loanTerm: "36 months",
    totalRepayable: 42000,
    grossSalary: 75000,
    netSalary: 60000
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
              <div className="space-y-8">
                <ApplicationDetails 
                  formData={personalDetails}
                  readOnly={true}
                />
                <AccountSummary 
                  accountSummary={accountSummary}
                  loanHistory={loanHistory}
                />
              </div>
            )}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ClientPortal;