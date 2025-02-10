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
    <div className="h-screen border-r flex flex-col bg-muted/50">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold tracking-tight">InventoryPro</h1>
      </div>
      <ScrollArea className="flex-1 px-3 py-2">
        <div className="space-y-1">
          {routes.map((route) => {
            const Icon = route.icon;
            return (
              <Link key={route.path} href={route.path}>
                <Button
                  variant={location === route.path ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start",
                    location === route.path ? "bg-primary/10 hover:bg-primary/15" : ""
                  )}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {route.label}
                </Button>
              </Link>
            );
          })}
        </div>
      </ScrollArea>
      <div className="p-3 mt-auto border-t bg-muted/30">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-muted-foreground hover:text-primary hover:bg-primary/10"
          onClick={() => logoutMutation.mutate()}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}