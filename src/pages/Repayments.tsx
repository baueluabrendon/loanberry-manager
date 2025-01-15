import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex justify-between items-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
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
  );
}