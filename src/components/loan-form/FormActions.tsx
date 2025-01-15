import { Button } from "@/components/ui/button";

interface FormActionsProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onExit: () => void;
}

export const FormActions = ({
  currentStep,
  totalSteps,
  onPrevious,
  onExit,
}: FormActionsProps) => {
  return (
    <div className="flex justify-between pt-4">
      {currentStep > 0 && (
        <Button type="button" variant="outline" onClick={onPrevious}>
          Previous
        </Button>
      )}
      <div className="flex gap-4 ml-auto">
        <Button type="button" variant="outline" onClick={onExit}>
          Exit
        </Button>
        <Button type="submit">
          {currentStep === totalSteps - 1 ? "Submit Application" : "Next"}
        </Button>
      </div>
    </div>
  );
};