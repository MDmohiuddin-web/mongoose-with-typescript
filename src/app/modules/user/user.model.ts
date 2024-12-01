import mongoose, { Document, Model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser, Model<IUser>, IUser>({
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

  export default User;
