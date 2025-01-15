import { ApplicationStatus } from "@/components/ApplicationStatus";
import { LoanApplicationForm } from "@/components/LoanApplicationForm";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Index = () => {
  const [showApplication, setShowApplication] = useState(false);

  const recentApplications = [
    {
      status: "pending" as const,
      date: "2024-04-10",
      amount: 15000,
    },
    {
      status: "approved" as const,
      date: "2024-03-15",
      amount: 10000,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Loan Application Portal</h1>
          <p className="text-lg text-gray-600 mb-8">Quick and easy loan applications with real-time status tracking</p>
          {!showApplication && (
            <Button
              onClick={() => setShowApplication(true)}
              className="animate-fadeIn"
              size="lg"
            >
              Start New Application
            </Button>
          )}
        </div>

        {showApplication ? (
          <div className="animate-slideIn">
            <LoanApplicationForm />
          </div>
        ) : (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recent Applications</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {recentApplications.map((application, index) => (
                <ApplicationStatus key={index} {...application} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;