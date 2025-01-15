import { Navigation } from "@/components/Navigation";
import { LoanApplicationForm } from "@/components/LoanApplicationForm";

const Apply = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <LoanApplicationForm />
      </div>
    </div>
  );
};

export default Apply;