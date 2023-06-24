import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const letsConnect = await mongoose.connect('mongodb+srv://khadijabenzerga1cpi2017:khadija2018@cluster0.7ustwsc.mongodb.net/', {
      useNewUrlParser: true,
    }); 
    console.log(`MongoDB is connected`);
  } catch (err) {
    console.log(`MongoDB Error : ${err.message}`);
    process.exit();
  }
};