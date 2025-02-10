import { Product, Supplier, User } from "@shared/schema";

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Widget A",
    sku: "WA-001",
    description: "A high quality widget",
    quantity: 100,
    minQuantity: 20,
    price: 1999,
    supplierId: 1,
    createdAt: new Date(),
  },
  {
    id: 2,
    name: "Widget B",
    sku: "WB-002",
    description: "An economy widget",
    quantity: 15,
    minQuantity: 25,
    price: 999,
    supplierId: 1,
    createdAt: new Date(),
  }
];

export const mockSuppliers: Supplier[] = [
  {
    id: 1,
    name: "Acme Corp",
    email: "sales@acme.com",
    phone: "555-0123",
    address: "123 Main St",
    active: true,
  },
  {
    id: 2,
    name: "Widget World",
    email: "info@widgetworld.com",
    phone: "555-0124",
    address: "456 Oak Ave",
    active: true,
  }
];

export const mockUsers: User[] = [
  {
    id: 1,
    username: "admin",
    password: "password123",
    role: "admin"
  }
];
