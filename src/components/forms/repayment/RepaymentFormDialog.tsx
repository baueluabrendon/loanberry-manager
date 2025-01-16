import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { RepaymentForm } from "@/components/RepaymentForm";

export const RepaymentFormDialog = () => {
  return (
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
  );
};