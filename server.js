require('dotenv').config();

const app = require("./app");
const mongoose = require('mongoose');
const UserModel = require("./model/user.model");
const PORT = process.env.PORT || 3001;
app.get('/', (req, res) => {
  res.send('Hello World............hyyyyyyyyyyyhhhhhhh....!');
}
);
// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const server = app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
