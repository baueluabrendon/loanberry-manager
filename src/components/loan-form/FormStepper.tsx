import { cn } from "@/lib/utils";

interface FormStepperProps {
  steps: string[];
  currentStep: number;
}

export const FormStepper = ({ steps, currentStep }: FormStepperProps) => {
  return (
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
  );
};