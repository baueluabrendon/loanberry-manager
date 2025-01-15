import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { PersonalInfoSection } from "./loan-form/PersonalInfoSection";
import { EmploymentInfoSection } from "./loan-form/EmploymentInfoSection";
import { ResidentialInfoSection } from "./loan-form/ResidentialInfoSection";
import { FinancialDetailsSection } from "./loan-form/FinancialDetailsSection";
import { LoanDetailsSection } from "./loan-form/LoanDetailsSection";
import { DocumentUploadSection } from "./loan-form/DocumentUploadSection";

const requiredDocuments = [
  { id: "terms", name: "Terms and Conditions Form" },
  { id: "employment", name: "Employment Confirmation Letter" },
  { id: "payslip1", name: "Pay Slip 1" },
  { id: "payslip2", name: "Pay Slip 2" },
  { id: "payslip3", name: "Pay Slip 3" },
  { id: "bankStatement", name: "3 Months Bank Statement" },
  { id: "salaryDeduction", name: "Irrevocable Salary Deduction Authority" },
  { id: "variation", name: "Permanent Variation Advice" },
  { id: "dataEntry", name: "Data Entry Form" },
  { id: "nasfund", name: "Nasfund Account Form" },
  { id: "id", name: "ID Document" },
];

const steps = [
  "Loan Application Details",
  "Documents Upload",
  "Employment Info",
  "Residential Info",
  "Financial Details",
  "Loan Details"
];

export const LoanApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Personal Info
    givenName: "", surname: "", dateOfBirth: "", gender: "", mobileNumber: "",
    email: "", village: "", district: "", province: "", nationality: "",
    // Employment Info
    department: "", fileNumber: "", postalAddress: "", workPhone: "", fax: "",
    dateEmployed: "", paymaster: "",
    // Residential Info
    lot: "", section: "", suburb: "", streetName: "", maritalStatus: "",
    spouseLastName: "", spouseFirstName: "", spouseEmployer: "", spouseContact: "",
    // Financial Details
    bank: "", bankBranch: "", bsbCode: "", accountName: "", accountNumber: "",
    accountType: "",
    // Loan Details
    purpose: "", loanAmount: "", pvaAmount: "", loanTerm: "", totalRepayable: "",
    grossSalary: "", netSalary: ""
  });

  const [documents, setDocuments] = useState<Record<string, File | null>>({
    ...requiredDocuments.reduce((acc, doc) => ({ ...acc, [doc.id]: null }), {})
  });

  const [processing, setProcessing] = useState<Record<string, boolean>>({
    ...requiredDocuments.reduce((acc, doc) => ({ ...acc, [doc.id]: false }), {})
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileUpload = async (docId: string, file: File) => {
    setDocuments(prev => ({ ...prev, [docId]: file }));
    setProcessing(prev => ({ ...prev, [docId]: true }));

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: "Document Processed",
        description: `Successfully processed ${file.name}`,
      });
    } catch (error) {
      toast({
        title: "Processing Error",
        description: "Failed to process document. Please try again.",
        variant: "destructive",
      });
    } finally {
      setProcessing(prev => ({ ...prev, [docId]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === steps.length - 1) {
      toast({
        title: "Application Submitted",
        description: "We'll review your application and get back to you soon.",
      });
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PersonalInfoSection formData={formData} handleInputChange={handleInputChange} />;
      case 1:
        return (
          <DocumentUploadSection
            documents={documents}
            processing={processing}
            requiredDocuments={requiredDocuments}
            handleFileUpload={handleFileUpload}
          />
        );
      case 2:
        return <EmploymentInfoSection formData={formData} handleInputChange={handleInputChange} />;
      case 3:
        return <ResidentialInfoSection formData={formData} handleInputChange={handleInputChange} />;
      case 4:
        return <FinancialDetailsSection formData={formData} handleInputChange={handleInputChange} />;
      case 5:
        return <LoanDetailsSection formData={formData} handleInputChange={handleInputChange} />;
      default:
        return null;
    }
  };

  return (
    <Card className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                  index <= currentStep
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-500"
                )}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "h-1 w-12 mx-2",
                    index < currentStep ? "bg-primary" : "bg-gray-200"
                  )}
                />
              )}
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-semibold">{steps[currentStep]}</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {renderStep()}
        <div className="flex justify-between pt-4">
          {currentStep > 0 && (
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Previous
            </Button>
          )}
          <Button type="submit" className="ml-auto">
            {currentStep === steps.length - 1 ? "Submit Application" : "Next"}
          </Button>
        </div>
      </form>
    </Card>
  );
};