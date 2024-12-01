import express, { Application, Request, Response } from "express";


import cors from "cors";
const app: Application = express();
import usersRouter from "./app/modules/user/user.routs";
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/api/user", usersRouter );
app.use("/api/user", usersRouter);


export default app; 

