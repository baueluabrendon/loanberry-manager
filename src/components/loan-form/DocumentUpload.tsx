import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { Upload, File, CheckCircle2 } from "lucide-react";

interface DocumentUploadProps {
  documents: Record<string, File | null>;
  processing: Record<string, boolean>;
  onFileUpload: (docId: string, file: File) => void;
  stage: number;
}

export const DocumentUpload = ({ documents, processing, onFileUpload, stage }: DocumentUploadProps) => {
  const initialDocuments = [
    { id: "application", name: "Application Form" },
    { id: "terms", name: "Terms and Conditions Form" },
  ];

  const requiredDocuments = [
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

  const currentDocuments = stage === 1 ? initialDocuments : requiredDocuments;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentDocuments.map((doc) => (
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
                  if (file) onFileUpload(doc.id, file);
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
};