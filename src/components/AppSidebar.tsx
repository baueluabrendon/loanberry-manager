import { 
  CreditCard, 
  DollarSign, 
  FileText, 
  Home, 
  Settings, 
  User, 
  HelpCircle 
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    path: "/portal"
  },
  {
    title: "Apply for a New Loan",
    icon: FileText,
    path: "/apply"
  },
  {
    title: "Repayments",
    icon: DollarSign,
    path: "/portal/repayments"
  },
  {
    title: "My Loans",
    icon: CreditCard,
    path: "/portal/loans"
  },
  {
    title: "Profile",
    icon: User,
    path: "/portal/profile"
  },
  {
    title: "Support",
    icon: HelpCircle,
    path: "/portal/support"
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/portal/settings"
  }
];

export function AppSidebar() {
  const navigate = useNavigate();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    onClick={() => navigate(item.path)}
                    tooltip={item.title}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}