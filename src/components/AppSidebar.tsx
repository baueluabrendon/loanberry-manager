import { 
  CreditCard, 
  DollarSign, 
  FileText, 
  Home, 
  User, 
  HelpCircle,
  AlertCircle
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
  SidebarMenuBadge
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
    title: "Application Status",
    icon: AlertCircle,
    path: "/portal/applications",
    badge: "2"
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
  }
];

export function AppSidebar() {
  const navigate = useNavigate();

  return (
    <Sidebar className="bg-[#32CD32]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-white">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    onClick={() => navigate(item.path)}
                    tooltip={item.title}
                    className="text-white hover:text-white/90"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                    {item.badge && (
                      <SidebarMenuBadge className="bg-white text-[#32CD32]">{item.badge}</SidebarMenuBadge>
                    )}
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