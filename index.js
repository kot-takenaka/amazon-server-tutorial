// import from packages
const express = require("express");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");
// import from othier files
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

// init
const PORT = 3000;
const app = express();
const DB =
  "mongodb+srv://kotaro:Mw*xD!h9Qe!qn..@cluster0.ga7dkmc.mongodb.net/?retryWrites=true&w=majority";

// middle ware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

// connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.get("/hello-world", (req, res) => {
  res.send("<div style='color:red'>aa<div>");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT} yes`);
});
