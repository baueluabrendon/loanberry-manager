import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, File, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface DocumentUploadProps {
  documents: Record<string, File | null>;
  processing: Record<string, boolean>;
  requiredDocuments: Array<{ id: string; name: string }>;
  handleFileUpload: (docId: string, file: File) => void;
}

export const DocumentUploadSection = ({
  documents,
  processing,
  requiredDocuments,
  handleFileUpload,
}: DocumentUploadProps) => {
  return (
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
  );
};