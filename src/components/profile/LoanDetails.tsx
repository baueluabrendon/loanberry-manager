import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const loanPurposes = [
  "School Fees",
  "Vacation",
  "Medical",
  "Funeral",
  "Holiday",
  "Customary",
  "Others"
] as const;

export interface LoanDetailsProps {
  formData: {
    loanAmount?: number;
    loanPurpose?: string;
    pvaAmount?: number;
    loanTerm?: number;
    totalLoanRepayable?: number;
    grossSalary?: number;
    netSalary?: number;
  };
  readOnly?: boolean;
  onChange?: (data: any) => void;
}

export const LoanDetails = ({ 
  formData, 
  readOnly = true, 
  onChange 
}: LoanDetailsProps) => {
  const handleInputChange = (field: string, value: string | number) => {
    if (onChange) {
      onChange({ [field]: value });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Loan Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="loanAmount">Loan Amount</Label>
            <Input
              id="loanAmount"
              type="number"
              value={formData.loanAmount || ''}
              onChange={(e) => handleInputChange('loanAmount', e.target.value)}
              readOnly={readOnly}
              className={readOnly ? "bg-gray-50" : ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="loanPurpose">Loan Purpose</Label>
            {readOnly ? (
              <Input
                id="loanPurpose"
                value={formData.loanPurpose || ''}
                readOnly
                className="bg-gray-50"
              />
            ) : (
              <Select
                value={formData.loanPurpose}
                onValueChange={(value) => handleInputChange('loanPurpose', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select purpose" />
                </SelectTrigger>
                <SelectContent>
                  {loanPurposes.map((purpose) => (
                    <SelectItem key={purpose} value={purpose}>
                      {purpose}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="pvaAmount">PVA Amount</Label>
            <Input
              id="pvaAmount"
              type="number"
              value={formData.pvaAmount || ''}
              onChange={(e) => handleInputChange('pvaAmount', e.target.value)}
              readOnly={readOnly}
              className={readOnly ? "bg-gray-50" : ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="loanTerm">Loan Term (# of Fortnights)</Label>
            <Input
              id="loanTerm"
              type="number"
              value={formData.loanTerm || ''}
              onChange={(e) => handleInputChange('loanTerm', e.target.value)}
              readOnly={readOnly}
              className={readOnly ? "bg-gray-50" : ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="totalLoanRepayable">Total Loan Repayable</Label>
            <Input
              id="totalLoanRepayable"
              type="number"
              value={formData.totalLoanRepayable || ''}
              onChange={(e) => handleInputChange('totalLoanRepayable', e.target.value)}
              readOnly={readOnly}
              className={readOnly ? "bg-gray-50" : ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="grossSalary">Gross Salary</Label>
            <Input
              id="grossSalary"
              type="number"
              value={formData.grossSalary || ''}
              onChange={(e) => handleInputChange('grossSalary', e.target.value)}
              readOnly={readOnly}
              className={readOnly ? "bg-gray-50" : ""}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="netSalary">Net Salary</Label>
            <Input
              id="netSalary"
              type="number"
              value={formData.netSalary || ''}
              onChange={(e) => handleInputChange('netSalary', e.target.value)}
              readOnly={readOnly}
              className={readOnly ? "bg-gray-50" : ""}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};