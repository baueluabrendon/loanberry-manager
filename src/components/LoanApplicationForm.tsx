import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { Upload, File, CheckCircle2, AlertCircle } from "lucide-react";

const requiredDocuments = [
  { id: "application", name: "Application Form" },
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

const steps = ["Documents Upload", "Personal Info", "Employment", "Loan Details"];

export const LoanApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    employer: "",
    income: "",
    loanAmount: "",
    purpose: "",
  });
  const [documents, setDocuments] = useState<Record<string, File | null>>(
    requiredDocuments.reduce((acc, doc) => ({ ...acc, [doc.id]: null }), {})
  );
  const [processing, setProcessing] = useState<Record<string, boolean>>(
    requiredDocuments.reduce((acc, doc) => ({ ...acc, [doc.id]: false }), {})
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileUpload = async (docId: string, file: File) => {
    setDocuments(prev => ({ ...prev, [docId]: file }));
    setProcessing(prev => ({ ...prev, [docId]: true }));

    // Simulate OCR processing
    try {
      // Here you would typically send the file to your OCR service
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated processing time
      
      // Update form data with extracted information
      // This is where you would normally process the OCR results
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

  const renderDocumentUpload = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {requiredDocuments.map((doc) => (
          <div key={doc.id} className="relative">
            <Label htmlFor={doc.id} className="block mb-2">
              {doc.name}
            </Label>
            <div className="relative">
              <Input
                id={doc.id}
                type="file"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFileUpload(doc.id, file);
                }}
              />
              <Button
                type="button"
                variant="outline"
                className={cn(
                  "w-full justify-start",
                  documents[doc.id] && "border-green-500"
                )}
                onClick={() => document.getElementById(doc.id)?.click()}
              >
                {processing[doc.id] ? (
                  <div className="flex items-center">
                    <File className="mr-2 h-4 w-4" />
                    Processing...
                  </div>
                ) : documents[doc.id] ? (
                  <div className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                    {documents[doc.id]?.name}
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload {doc.name}
                  </div>
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return renderDocumentUpload();
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="John Doe"
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
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(555) 555-5555"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="employer">Current Employer</Label>
              <Input
                id="employer"
                name="employer"
                value={formData.employer}
                onChange={handleInputChange}
                placeholder="Company Name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="income">Annual Income</Label>
              <Input
                id="income"
                name="income"
                type="number"
                value={formData.income}
                onChange={handleInputChange}
                placeholder="60000"
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="loanAmount">Desired Loan Amount</Label>
              <Input
                id="loanAmount"
                name="loanAmount"
                type="number"
                value={formData.loanAmount}
                onChange={handleInputChange}
                placeholder="10000"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="purpose">Loan Purpose</Label>
              <Input
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleInputChange}
                placeholder="Home Improvement"
              />
            </div>
          </div>
        );
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
