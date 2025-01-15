import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { DocumentUpload } from "./loan-form/DocumentUpload";
import { ApplicationDetails } from "./loan-form/ApplicationDetails";
import { useNavigate } from "react-router-dom";

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
      // Simulate document processing
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
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${index <= currentStep ? "bg-primary text-white" : "bg-gray-200 text-gray-500"}`}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-1 w-12 mx-2 ${
                    index < currentStep ? "bg-primary" : "bg-gray-200"
                  }`}
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
          <div className="flex gap-4 ml-auto">
            <Button type="button" variant="outline" onClick={handleExit}>
              Exit
            </Button>
            <Button type="submit">
              {currentStep === steps.length - 1 ? "Submit Application" : "Next"}
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
};