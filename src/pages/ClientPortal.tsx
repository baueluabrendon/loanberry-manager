import { Navigation } from "@/components/Navigation";
import { ApplicationStatus } from "@/components/ApplicationStatus";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ClientPortal = () => {
  // Mock data - in a real app, this would come from an API
  const recentApplications = [
    { status: "pending", date: "2024-02-20", amount: 25000 },
    { status: "approved", date: "2024-01-15", amount: 15000 },
    { status: "reviewing", date: "2024-02-18", amount: 50000 },
  ] as const;

  const accountSummary = {
    totalLoans: 2,
    activeLoans: 1,
    totalBalance: 40000,
    nextPayment: "2024-03-01",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Total Loans</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{accountSummary.totalLoans}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Active Loans</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{accountSummary.activeLoans}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Total Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">${accountSummary.totalBalance.toLocaleString()}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Next Payment Due</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{accountSummary.nextPayment}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Recent Applications</h2>
          <div className="grid gap-4">
            {recentApplications.map((application, index) => (
              <ApplicationStatus
                key={index}
                status={application.status}
                date={application.date}
                amount={application.amount}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;