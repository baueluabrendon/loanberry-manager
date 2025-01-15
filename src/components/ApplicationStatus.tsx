import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ApplicationStatusProps {
  status: "pending" | "approved" | "rejected" | "reviewing";
  date: string;
  amount: number;
}

export const ApplicationStatus = ({ status, date, amount }: ApplicationStatusProps) => {
  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-800",
    approved: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
    reviewing: "bg-blue-100 text-blue-800",
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <span className={cn("px-3 py-1 rounded-full text-sm font-medium", statusStyles[status])}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-semibold">${amount.toLocaleString()}</p>
          <p className="text-sm text-gray-500">Loan Amount</p>
        </div>
      </div>
    </Card>
  );
};