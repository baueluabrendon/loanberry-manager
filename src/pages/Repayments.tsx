import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppSidebar } from "@/components/AppSidebar";
import { Navigation } from "@/components/Navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RepaymentForm } from "@/components/RepaymentForm";
import { RepaymentHistory } from "@/components/RepaymentHistory";

export default function Repayments() {
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
              <div className="flex justify-between items-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Repayment
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Add Repayment</DialogTitle>
                    </DialogHeader>
                    <RepaymentForm />
                  </DialogContent>
                </Dialog>
              </div>
              
              <RepaymentHistory />
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
}