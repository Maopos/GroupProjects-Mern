// 4. import mongoose
import mongoose from "mongoose";

// 5. connect db
const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDb is connected on: ${connection.connection.port}`);
    console.log("");
    console.log("==================================");
    console.log("");
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDb;

// 6. go to index.js
