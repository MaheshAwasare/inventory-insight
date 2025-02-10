import { SidebarNav } from "@/components/layout/sidebar-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Product, Supplier } from "@shared/schema";
import {
  Package,
  Users,
  AlertTriangle,
  TrendingUp
} from "lucide-react";

export default function Dashboard() {
  const { data: products } = useQuery<Product[]>({ 
    queryKey: ["/api/products"]
  });

  const { data: suppliers } = useQuery<Supplier[]>({
    queryKey: ["/api/suppliers"]
  });

  const lowStock = products?.filter(p => p.quantity <= p.minQuantity) || [];
  const totalProducts = products?.length || 0;
  const activeSuppliers = suppliers?.filter(s => s.active).length || 0;
  const totalStockValue = products?.reduce((acc, p) => acc + (p.price * p.quantity), 0) / 100 || 0;

  return (
    <div className="flex h-screen">
      <SidebarNav />
      <main className="flex-1 p-8 overflow-auto bg-background">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalProducts}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Items in inventory
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Suppliers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeSuppliers}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Current partnerships
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{lowStock.length}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Need reordering
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Stock Value</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{totalStockValue.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</div>
              <p className="text-xs text-muted-foreground mt-1">
                Current inventory value
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}