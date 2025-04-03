const mongoose = require("mongoose");

// Log connection attempt (hide password in logs)
const connectionString = process.env.MONGODB_URI;
const sanitizedConnectionString = connectionString.replace(
  /:([^:@]+)@/, 
  ':****@'
);
console.log(`Attempting MongoDB connection: ${sanitizedConnectionString}`);

// Set a longer timeout and add more options
mongoose
  .connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: 15000, // Increase timeout to 15 seconds
    socketTimeoutMS: 45000,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);  // Exit with error to indicate connection failure
  });