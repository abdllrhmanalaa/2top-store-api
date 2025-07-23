export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const products = [
    {
      id: 1,
      name: "Smartphone",
      brand: "Samsung",
      price: 799,
      image: "https://example.com/images/smartphone.jpg",
    },
    {
      id: 2,
      name: "Laptop",
      brand: "Dell",
      price: 1299,
      image: "https://example.com/images/laptop.jpg",
    },
    {
      id: 3,
      name: "Wireless Headphones",
      brand: "Sony",
      price: 299,
      image: "https://example.com/images/headphones.jpg",
    },
  ];

  res.status(200).json(products);
}

