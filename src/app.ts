import express, { Application, NextFunction, Request, Response } from "express";

import mongoose from "mongoose";
import cors from "cors";
const app: Application = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.send("mongoose-with-typescript"); 
})


app.get("/users", async (req: Request, res: Response, next: NextFunction) => {
    try {
      interface IUser {
        id: number;
        role: string;
        password: string;
        name: {
          firstName: string;
          lastName: string;
        };
        DateOfBirth?: string;
        gender: "male" | "female";
        email: string;
        contactNumber: string;
        address: {
          presentAddress: string;
          permanentAddress: string;
        };
      }
  
      const userSchema = new mongoose.Schema<IUser>({
        id: { type: Number, required: true, unique: true },
        role: { type: String, required: true },
        password: { type: String, required: true },
        name: {
          firstName: { type: String, required: true },
          lastName: { type: String, required: true },
        },
        DateOfBirth: { type: String },
        gender: { type: String, enum: ["male", "female"] },
        email: { type: String, required: true, unique: true },
        contactNumber: { type: String, required: true },
        address: {
          presentAddress: { type: String, required: true },
          permanentAddress: { type: String, required: true },
        },
      });
  
      const User = mongoose.model<IUser>("User", userSchema);
  
      const newUser = new User({
        id: 12,
        role: "admin",
        password: "password123",
        name: {
          firstName: "John",
          lastName: "Doe",
        },
        DateOfBirth: "199-12-29",
        gender: "male",
        email: "mohi@gmail.com",
        contactNumber: "01865540885",
        address: {
          presentAddress: "feni ",
          permanentAddress: "456 Elm St",
        },
      });
  
      // SAVE THE USER
      await newUser.save();
      res.json({ message: "User saved to database", user: newUser });
      console.log("User saved to database", newUser);
    } catch (error) {
      console.error("Error saving user to database:", error);
      res.status(500).json({ message: "Error saving user to database", error });
    }
  });
  
  
export default app;
