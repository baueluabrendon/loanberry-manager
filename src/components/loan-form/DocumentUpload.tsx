import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Upload, File, CheckCircle2, Lock } from "lucide-react";
import { useState } from "react";

interface DocumentUploadProps {
  documents: Record<string, File | null>;
  processing: Record<string, boolean>;
  onFileUpload: (docId: string, file: File) => void;
  stage: number;
}

type SectorType = "public" | "statutory" | "company" | null;

export const DocumentUpload = ({ documents, processing, onFileUpload, stage }: DocumentUploadProps) => {
  const [selectedSector, setSelectedSector] = useState<SectorType>(null);

  const initialDocuments = [
    { id: "application", name: "Application Form" },
    { id: "terms", name: "Terms and Conditions Form" },
  ];

  const mandatoryDocuments = [
    { id: "payslip1", name: "Pay Slip 1" },
    { id: "payslip2", name: "Pay Slip 2" },
    { id: "employment", name: "Employment Confirmation Letter" },
    { id: "dataEntry", name: "Data Entry Form" },
    { id: "salaryDeduction", name: "Irrevocable Salary Deduction Authority" },
    { id: "id", name: "ID Document" },
  ];

  const publicServiceDocuments = [
    { id: "variation", name: "Permanent Variation Advice" },
  ];

  const companyDocuments = [
    { id: "payslip3", name: "Pay Slip 3" },
    { id: "bankStatement", name: "3 Months Bank Statement" },
    { id: "nasfund", name: "Nasfund Account Form" },
    { id: "salaryConfirmation", name: "Salary Deduction Confirmation Letter" },
  ];

  const isDocumentEnabled = (docId: string) => {
    // Stage 1 documents are always enabled
    if (stage === 1) return true;

    // For stage 2, check sector-specific rules
    if (stage === 2) {
      // If no sector is selected, only show disabled documents
      if (!selectedSector) return false;

      // Mandatory documents are always enabled in stage 2
      const isMandatory = mandatoryDocuments.some(doc => doc.id === docId);
      if (isMandatory) return true;

      // Public service specific documents
      if (selectedSector === "public") {
        return publicServiceDocuments.some(doc => doc.id === docId);
      }

      // Company specific documents
      if (selectedSector === "company") {
        return companyDocuments.some(doc => doc.id === docId);
      }

      // Statutory body only allows mandatory documents
      if (selectedSector === "statutory") {
        return false;
      }
    }

    return true;
  };

  const currentDocuments = stage === 1 
    ? initialDocuments 
    : [
        ...mandatoryDocuments,
        ...publicServiceDocuments,
        ...companyDocuments
      ];

  return (
    <div className="space-y-6">
      {stage === 2 && (
        <div className="flex flex-wrap gap-4 mb-6">
          <Button
            type="button"
            variant={selectedSector === "public" ? "default" : "outline"}
            onClick={() => setSelectedSector("public")}
          >
            Public Service
          </Button>
          <Button
            type="button"
            variant={selectedSector === "statutory" ? "default" : "outline"}
            onClick={() => setSelectedSector("statutory")}
          >
            Statutory Body
          </Button>
          <Button
            type="button"
            variant={selectedSector === "company" ? "default" : "outline"}
            onClick={() => setSelectedSector("company")}
          >
            Company
          </Button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentDocuments.map((doc) => {
          const isEnabled = isDocumentEnabled(doc.id);
          
          return (
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
                    if (file && isEnabled) onFileUpload(doc.id, file);
                  }}
                  disabled={!isEnabled}
                />
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "w-full justify-start",
                    documents[doc.id] && "border-green-500",
                    !isEnabled && "opacity-50 cursor-not-allowed"
                  )}
                  onClick={() => isEnabled && document.getElementById(doc.id)?.click()}
                  disabled={!isEnabled}
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
                      {!isEnabled ? (
                        <Lock className="mr-2 h-4 w-4" />
                      ) : (
                        <Upload className="mr-2 h-4 w-4" />
                      )}
                      Upload {doc.name}
                    </div>
                  )}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};