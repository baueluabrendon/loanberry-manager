import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoanDetailsProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LoanDetailsSection = ({ formData, handleInputChange }: LoanDetailsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="purpose">Purpose of Loan</Label>
        <Input
          id="purpose"
          name="purpose"
          value={formData.purpose}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="loanAmount">Loan Amount</Label>
        <Input
          id="loanAmount"
          name="loanAmount"
          type="number"
          value={formData.loanAmount}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="pvaAmount">PVA Amount</Label>
        <Input
          id="pvaAmount"
          name="pvaAmount"
          type="number"
          value={formData.pvaAmount}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="loanTerm">Loan Term</Label>
        <Input
          id="loanTerm"
          name="loanTerm"
          value={formData.loanTerm}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="totalRepayable">Total Repayable</Label>
        <Input
          id="totalRepayable"
          name="totalRepayable"
          type="number"
          value={formData.totalRepayable}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="grossSalary">Gross Salary</Label>
        <Input
          id="grossSalary"
          name="grossSalary"
          type="number"
          value={formData.grossSalary}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="netSalary">Net Salary</Label>
        <Input
          id="netSalary"
          name="netSalary"
          type="number"
          value={formData.netSalary}
          onChange={handleInputChange}
          readOnly
        />
      </div>
    </div>
  );
};