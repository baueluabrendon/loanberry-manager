import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload } from "lucide-react";

export function RepaymentForm() {
  const [file, setFile] = useState<File | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted with file:', file);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="loan">Select Loan</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a loan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="loan1">Loan #12345</SelectItem>
            <SelectItem value="loan2">Loan #67890</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          type="number"
          placeholder="Enter amount"
          min="0"
          step="0.01"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="receipt">Upload Receipt</Label>
        <div className="flex items-center space-x-2">
          <Input
            id="receipt"
            type="file"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            accept=".pdf,.jpg,.jpeg,.png"
          />
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => document.getElementById('receipt')?.click()}
          >
            <Upload className="mr-2 h-4 w-4" />
            {file ? file.name : 'Upload Receipt'}
          </Button>
        </div>
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <Button type="submit">Submit Repayment</Button>
      </div>
    </form>
  );
}