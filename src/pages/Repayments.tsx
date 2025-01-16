import { AppSidebar } from "@/components/AppSidebar";
import { Navigation } from "@/components/Navigation";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { RepaymentHistory } from "@/components/RepaymentHistory";
import { RepaymentFormDialog } from "@/components/forms/repayment/RepaymentFormDialog";

export default function Repayments() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 w-full z-50 bg-white">
        <Navigation />
      </div>
      <SidebarProvider>
        <div className="pt-16 flex w-full">
          <AppSidebar />
          <SidebarInset className="flex-1">
            <div className="container mx-auto px-4 py-8">
              <div className="flex-1 space-y-6">
                <div className="flex justify-between items-center">
                  <RepaymentFormDialog />
                </div>
                <RepaymentHistory />
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}