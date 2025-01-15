import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-semibold text-gray-900">
            Welcome to K&R Financial Services
          </h1>
          <Button 
            onClick={() => navigate('/apply')}
            className="bg-primary hover:bg-primary/90"
          >
            Apply for a New Loan
          </Button>
        </div>
      </div>
    </nav>
  );
};