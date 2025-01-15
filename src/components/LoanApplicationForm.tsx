import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { DocumentUpload } from "./loan-form/DocumentUpload";
import { ApplicationDetails } from "./loan-form/ApplicationDetails";
import { useNavigate } from "react-router-dom";
import { FormStepper } from "./loan-form/FormStepper";
import { FormActions } from "./loan-form/FormActions";

const steps = ["Initial Documents", "Required Documents", "Application Details"];

export const LoanApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { toast } = useToast();
  const [formData, setFormData] = useState({});
  const [documents, setDocuments] = useState<Record<string, File | null>>({});
  const [processing, setProcessing] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();

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

  const handleExit = () => {
    if (window.confirm("Are you sure you want to exit? Any unsaved progress will be lost.")) {
      navigate("/");
    }
  };

  const handleFormDataChange = (newData: any) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
      case 1:
        return (
          <DocumentUpload
            documents={documents}
            processing={processing}
            onFileUpload={handleFileUpload}
            stage={currentStep + 1}
          />
        );
      case 2:
        return (
          <ApplicationDetails 
            formData={formData} 
            readOnly={false}
            onChange={handleFormDataChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Card className="p-6 max-w-7xl mx-auto">
      <FormStepper steps={steps} currentStep={currentStep} />
      <form onSubmit={handleSubmit} className="space-y-6">
        {renderStep()}
        <FormActions
          currentStep={currentStep}
          totalSteps={steps.length}
          onPrevious={() => setCurrentStep(currentStep - 1)}
          onExit={handleExit}
        />
      </form>
    </Card>
  );
};