module.exports = (req, res) => {
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

  // ✨ هذه أهم خطوة: دعم CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  res.status(200).json(electronicProducts);
};

