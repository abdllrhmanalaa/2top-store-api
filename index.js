const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const products = require("./api/products");

app.get("/", (req, res) => {
  res.send("Welcome to 2Top Store API");
});

app.use("/api/products", products);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
