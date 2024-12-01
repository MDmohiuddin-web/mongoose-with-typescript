import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

const db = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mongoose-with-typescript");
    console.log("👍 Database connected 😊");
    app.listen(port, () => {
      console.log(`mongoose-with-typescript app listening on port ${port}`);
    });
  } catch (error) {
    console.log("Error connecting to database: 😣😣", error);
  }
};

db();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

