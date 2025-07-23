const express = require("express");
const router = express.Router();

const electronicProducts = [
  {
    id: 1,
    name: "Smartphone",
    brand: "Samsung",
    price: 799,
    image: "https://example.com/images/smartphone.jpg"
  },
  {
    id: 2,
    name: "Laptop",
    brand: "Dell",
    price: 1299,
    image: "https://example.com/images/laptop.jpg"
  },
  {
    id: 3,
    name: "Wireless Headphones",
    brand: "Sony",
    price: 299,
    image: "https://example.com/images/headphones.jpg"
  }
];

router.get("/", (req, res) => {
  res.json(electronicProducts);
});

module.exports = router;
