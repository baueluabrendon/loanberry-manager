import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EmploymentInfoProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EmploymentInfoSection = ({ formData, handleInputChange }: EmploymentInfoProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="department">Department/Company</Label>
        <Input
          id="department"
          name="department"
          value={formData.department}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="fileNumber">File Number</Label>
        <Input
          id="fileNumber"
          name="fileNumber"
          value={formData.fileNumber}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="postalAddress">Postal Address</Label>
        <Input
          id="postalAddress"
          name="postalAddress"
          value={formData.postalAddress}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="workPhone">Work Phone Number</Label>
        <Input
          id="workPhone"
          name="workPhone"
          value={formData.workPhone}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="fax">Fax</Label>
        <Input
          id="fax"
          name="fax"
          value={formData.fax}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="dateEmployed">Date Employed</Label>
        <Input
          id="dateEmployed"
          name="dateEmployed"
          type="date"
          value={formData.dateEmployed}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="paymaster">Paymaster</Label>
        <Input
          id="paymaster"
          name="paymaster"
          value={formData.paymaster}
          onChange={handleInputChange}
          readOnly
        />
      </div>
    </div>
  );
};