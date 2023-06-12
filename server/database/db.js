import mongoose from "mongoose";

const DBConnection = async () => {
  const MONGODB_URL = `mongodb+srv://username:<password>@cluster0.4blgi6a.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(MONGODB_URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};

export default DBConnection;
