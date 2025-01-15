import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FinancialDetailsProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FinancialDetailsSection = ({ formData, handleInputChange }: FinancialDetailsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="bank">Bank</Label>
        <Input
          id="bank"
          name="bank"
          value={formData.bank}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="bankBranch">Bank Branch</Label>
        <Input
          id="bankBranch"
          name="bankBranch"
          value={formData.bankBranch}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="bsbCode">BSB Code</Label>
        <Input
          id="bsbCode"
          name="bsbCode"
          value={formData.bsbCode}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="accountName">Account Name</Label>
        <Input
          id="accountName"
          name="accountName"
          value={formData.accountName}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="accountNumber">Account Number</Label>
        <Input
          id="accountNumber"
          name="accountNumber"
          value={formData.accountNumber}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="accountType">Account Type</Label>
        <Input
          id="accountType"
          name="accountType"
          value={formData.accountType}
          onChange={handleInputChange}
          readOnly
        />
      </div>
    </div>
  );
};