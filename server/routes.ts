import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth } from "./auth";
import { insertProductSchema, insertSupplierSchema } from "@shared/schema";

export function registerRoutes(app: Express): Server {
  setupAuth(app);

  // Products API
  app.get("/api/products", async (_req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  app.post("/api/products", async (req, res) => {
    const result = insertProductSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json(result.error);
    }
    const product = await storage.createProduct(result.data);
    res.status(201).json(product);
  });

  app.patch("/api/products/:id", async (req, res) => {
    const product = await storage.updateProduct(Number(req.params.id), req.body);
    res.json(product);
  });

  app.delete("/api/products/:id", async (req, res) => {
    await storage.deleteProduct(Number(req.params.id));
    res.sendStatus(204);
  });

  // Suppliers API
  app.get("/api/suppliers", async (_req, res) => {
    const suppliers = await storage.getSuppliers();
    res.json(suppliers);
  });

  app.post("/api/suppliers", async (req, res) => {
    const result = insertSupplierSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json(result.error);
    }
    const supplier = await storage.createSupplier(result.data);
    res.status(201).json(supplier);
  });

  app.patch("/api/suppliers/:id", async (req, res) => {
    const supplier = await storage.updateSupplier(Number(req.params.id), req.body);
    res.json(supplier);
  });

  app.delete("/api/suppliers/:id", async (req, res) => {
    await storage.deleteSupplier(Number(req.params.id));
    res.sendStatus(204);
  });

  const httpServer = createServer(app);
  return httpServer;
}
