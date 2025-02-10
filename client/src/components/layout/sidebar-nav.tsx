import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  BarChart,
  LogOut 
} from "lucide-react";
import { useAuth } from "@/hooks/use-auth";

const routes = [
  {
    path: "/",
    label: "Dashboard",
    icon: LayoutDashboard
  },
  {
    path: "/products",
    label: "Products",
    icon: Package
  },
  {
    path: "/suppliers",
    label: "Suppliers",
    icon: Users
  },
  {
    path: "/reports",
    label: "Reports",
    icon: BarChart
  }
];

export function SidebarNav() {
  const [location] = useLocation();
  const { logoutMutation } = useAuth();

  return (
    <div className="h-screen border-r flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold">InventoryPro</h1>
      </div>
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-1">
          {routes.map((route) => {
            const Icon = route.icon;
            return (
              <Link key={route.path} href={route.path}>
                <Button
                  variant={location === route.path ? "secondary" : "ghost"}
                  className={cn("w-full justify-start")}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {route.label}
                </Button>
              </Link>
            );
          })}
        </div>
      </ScrollArea>
      <div className="p-3 mt-auto">
        <Button 
          variant="ghost" 
          className="w-full justify-start"
          onClick={() => logoutMutation.mutate()}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}
