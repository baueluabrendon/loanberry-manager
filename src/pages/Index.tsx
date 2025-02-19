import { Navigation } from "@/components/Navigation";
import { LoginForm } from "@/components/LoginForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <LoginForm />
      </div>
    </div>
  );
};

export default Index;