import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="bg-[#FEF7CD] shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-semibold text-gray-900">
            Welcome to K&R Financial Services
          </h1>
          {location.pathname === '/' && (
            <Button 
              onClick={() => navigate('/apply')}
              className="bg-primary hover:bg-primary/90"
            >
              Apply Now
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};