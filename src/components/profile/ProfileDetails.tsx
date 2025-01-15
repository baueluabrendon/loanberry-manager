import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

interface ProfileDetailsProps {
  formData: any;
  readOnly?: boolean;
  onChange?: (data: any) => void;
}

export const ProfileDetails = ({ 
  formData, 
  readOnly = true, 
  onChange 
}: ProfileDetailsProps) => {
  const sections = [
    {
      title: "Personal Information",
      fields: [
        { id: "givenName", label: "Given Name" },
        { id: "surname", label: "Surname" },
        { id: "dateOfBirth", label: "Date of Birth", type: "date" },
        { id: "gender", label: "Gender" },
        { id: "mobileNumber", label: "Mobile Number" },
        { id: "email", label: "Email", type: "email" },
        { id: "village", label: "Village" },
        { id: "district", label: "District" },
        { id: "province", label: "Province" },
        { id: "nationality", label: "Nationality" },
      ],
    },
    {
      title: "Employment Information",
      fields: [
        { id: "department", label: "Department/Company" },
        { id: "fileNumber", label: "File Number" },
        { id: "postalAddress", label: "Postal Address" },
        { id: "workPhone", label: "Work Phone Number" },
        { id: "fax", label: "Fax" },
        { id: "dateEmployed", label: "Date Employed", type: "date" },
        { id: "paymaster", label: "Paymaster" },
      ],
    },
    {
      title: "Residential Information",
      fields: [
        { id: "lot", label: "Lot" },
        { id: "section", label: "Section" },
        { id: "suburb", label: "Suburb" },
        { id: "streetName", label: "Street Name" },
        { id: "maritalStatus", label: "Marital Status" },
        { id: "spouseLastName", label: "Spouse Last Name" },
        { id: "spouseFirstName", label: "Spouse First Name" },
        { id: "spouseEmployer", label: "Spouse Employer Name" },
        { id: "spouseContact", label: "Spouse Contact Detail" },
      ],
    },
    {
      title: "Financial Details",
      fields: [
        { id: "bank", label: "Bank" },
        { id: "bankBranch", label: "Bank Branch" },
        { id: "bsbCode", label: "BSB Code" },
        { id: "accountName", label: "Account Name" },
        { id: "accountNumber", label: "Account Number" },
        { id: "accountType", label: "Account Type" },
      ],
    },
  ];

  const handleInputChange = (fieldId: string, value: string) => {
    if (onChange) {
      onChange({ [fieldId]: value });
    }
  };

  return (
    <div className="space-y-8">
      {sections.map((section) => (
        <Card key={section.title} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.fields.map((field) => (
              <div key={field.id} className="space-y-2">
                <Label htmlFor={field.id}>{field.label}</Label>
                <Input
                  id={field.id}
                  type={field.type || "text"}
                  value={formData[field.id] || ""}
                  onChange={(e) => handleInputChange(field.id, e.target.value)}
                  readOnly={readOnly}
                  className={readOnly ? "bg-gray-50" : ""}
                />
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
};