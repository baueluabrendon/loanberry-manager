import { AppSidebar } from "@/components/AppSidebar";
import { Navigation } from "@/components/Navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ClientPortal = () => {
  const navigate = useNavigate();

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
              <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
                <p className="text-gray-600 mb-6">Manage your loans and account information</p>
                <div className="flex justify-center gap-4">
                  <Button onClick={() => navigate('/portal/loans')}>View Loans</Button>
                  <Button onClick={() => navigate('/apply')}>Apply for a Loan</Button>
                </div>
              </div>
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default ClientPortal;