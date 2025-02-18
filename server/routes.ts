import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      
      // Store message
      await storage.createContactMessage(contactData);

      // Send email notification (mock for demo)
      const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: "demo@ethereal.email",
          pass: "demopass"
        },
      });

      await transporter.sendMail({
        from: contactData.email,
        to: "contact@fidcent.com",
        subject: `New Contact Message from ${contactData.name}`,
        text: contactData.message,
      });

      res.json({ success: true });
    } catch (error) {
      res.status(400).json({ error: "Invalid contact form data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
