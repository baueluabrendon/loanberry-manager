import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const steps = ["Personal Info", "Employment", "Loan Details"];

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === steps.length - 1) {
      toast({
        title: "Application Submitted",
        description: "We'll review your application and get back to you soon.",
      });
      // Here you would typically send the data to your backend
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
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
      case 1:
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
      case 2:
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
    <Card className="p-6 max-w-2xl mx-auto">
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