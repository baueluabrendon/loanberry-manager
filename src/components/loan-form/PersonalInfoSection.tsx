import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PersonalInfoProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PersonalInfoSection = ({ formData, handleInputChange }: PersonalInfoProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="givenName">Given Name</Label>
        <Input
          id="givenName"
          name="givenName"
          value={formData.givenName}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="surname">Surname</Label>
        <Input
          id="surname"
          name="surname"
          value={formData.surname}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="dateOfBirth">Date of Birth</Label>
        <Input
          id="dateOfBirth"
          name="dateOfBirth"
          type="date"
          value={formData.dateOfBirth}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="gender">Gender</Label>
        <Input
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="mobileNumber">Mobile Number</Label>
        <Input
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="village">Village</Label>
        <Input
          id="village"
          name="village"
          value={formData.village}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="district">District</Label>
        <Input
          id="district"
          name="district"
          value={formData.district}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="province">Province</Label>
        <Input
          id="province"
          name="province"
          value={formData.province}
          onChange={handleInputChange}
          readOnly
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="nationality">Nationality</Label>
        <Input
          id="nationality"
          name="nationality"
          value={formData.nationality}
          onChange={handleInputChange}
          readOnly
        />
      </div>
    </div>
  );
};