import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ResidentialInfoProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ResidentialInfoSection = ({ formData, handleInputChange }: ResidentialInfoProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="lot">Lot</Label>
        <Input
          id="lot"
          name="lot"
          value={formData.lot}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="section">Section</Label>
        <Input
          id="section"
          name="section"
          value={formData.section}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="suburb">Suburb</Label>
        <Input
          id="suburb"
          name="suburb"
          value={formData.suburb}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="streetName">Street Name</Label>
        <Input
          id="streetName"
          name="streetName"
          value={formData.streetName}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="maritalStatus">Marital Status</Label>
        <Input
          id="maritalStatus"
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="spouseLastName">Spouse Last Name</Label>
        <Input
          id="spouseLastName"
          name="spouseLastName"
          value={formData.spouseLastName}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="spouseFirstName">Spouse First Name</Label>
        <Input
          id="spouseFirstName"
          name="spouseFirstName"
          value={formData.spouseFirstName}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="spouseEmployer">Spouse Employer Name</Label>
        <Input
          id="spouseEmployer"
          name="spouseEmployer"
          value={formData.spouseEmployer}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="spouseContact">Spouse Contact Detail</Label>
        <Input
          id="spouseContact"
          name="spouseContact"
          value={formData.spouseContact}
          onChange={handleInputChange}
          readOnly
        />
      </div>
    </div>
  );
};