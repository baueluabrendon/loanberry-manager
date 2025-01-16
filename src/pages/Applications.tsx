import { AppSidebar } from "@/components/AppSidebar";
import { ApplicationStatus } from "@/components/ApplicationStatus";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Applications = () => {
  const applications = [
    {
      id: "APP001",
      status: "pending",
      date: "2024-03-15",
      amount: 5000,
    },
    {
      id: "APP002",
      status: "reviewing",
      date: "2024-03-14",
      amount: 7500,
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SidebarProvider>
        <div className="flex">
          <AppSidebar />
          <SidebarInset className="flex flex-col">
            <div className="flex-1 p-6">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-6">Loan Applications</h1>
                <div className="grid gap-4">
                  {applications.map((app) => (
                    <ApplicationStatus
                      key={app.id}
                      status={app.status as "pending" | "approved" | "rejected" | "reviewing"}
                      date={app.date}
                      amount={app.amount}
                    />
                  ))}
                </div>
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Applications;