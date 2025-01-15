import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export const PersonalDetails = ({ userProfile }: { userProfile: UserProfile }) => {
  return (
    <div className="mb-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="mr-2 h-5 w-5" />
            Personal Details
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-medium">{userProfile.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium">{userProfile.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-medium">{userProfile.phone}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Address</p>
            <p className="font-medium">{userProfile.address}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};