module.exports = (req, res) => {
  const electronicProducts = [
    {
      id: 1,
      name: "iPhone 14 Pro Max",
      brand: "Apple",
      price: 1199,
      image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 2,
      name: "Galaxy S23 Ultra",
      brand: "Samsung",
      price: 1099,
      image: "https://m.media-amazon.com/images/I/61VVkCc5rXL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 3,
      name: "MacBook Pro 14” M2",
      brand: "Apple",
      price: 1999,
      image: "https://m.media-amazon.com/images/I/71Ujbz4-MFL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 4,
      name: "Dell XPS 13",
      brand: "Dell",
      price: 1299,
      image: "https://m.media-amazon.com/images/I/71nM1xCoIhL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 5,
      name: "Sony WH-1000XM5",
      brand: "Sony",
      price: 349,
      image: "https://m.media-amazon.com/images/I/61Y9ZQvYk1L._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 6,
      name: "AirPods Pro 2",
      brand: "Apple",
      price: 249,
      image: "https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 7,
      name: "iPad Pro 12.9”",
      brand: "Apple",
      price: 1399,
      image: "https://m.media-amazon.com/images/I/81gC7frRJyL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 8,
      name: "Galaxy Tab S9",
      brand: "Samsung",
      price: 999,
      image: "https://m.media-amazon.com/images/I/7165w1Af+HL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 9,
      name: "Apple Watch Ultra",
      brand: "Apple",
      price: 799,
      image: "https://m.media-amazon.com/images/I/71WbEghPduL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 10,
      name: "Galaxy Watch 6",
      brand: "Samsung",
      price: 399,
      image: "https://m.media-amazon.com/images/I/61BLKezH38L._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 11,
      name: "Sony PlayStation 5",
      brand: "Sony",
      price: 499,
      image: "https://m.media-amazon.com/images/I/51vLZtLsmTL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 12,
      name: "Xbox Series X",
      brand: "Microsoft",
      price: 499,
      image: "https://m.media-amazon.com/images/I/61JGKhqxHxL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 13,
      name: "GoPro HERO11",
      brand: "GoPro",
      price: 399,
      image: "https://m.media-amazon.com/images/I/71fgD8WzKYL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 14,
      name: "DJI Mini 3 Drone",
      brand: "DJI",
      price: 599,
      image: "https://m.media-amazon.com/images/I/61g+pvkO7ZL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 15,
      name: "Amazon Echo Dot (5th Gen)",
      brand: "Amazon",
      price: 49,
      image: "https://m.media-amazon.com/images/I/61u0y9ADElL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 16,
      name: "Logitech MX Master 3S",
      brand: "Logitech",
      price: 99,
      image: "https://m.media-amazon.com/images/I/71MZTfYz5HL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 17,
      name: "Anker Power Bank 20000mAh",
      brand: "Anker",
      price: 49,
      image: "https://m.media-amazon.com/images/I/61T9yyjZG-L._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 18,
      name: "Samsung T7 Portable SSD",
      brand: "Samsung",
      price: 109,
      image: "https://m.media-amazon.com/images/I/71UxbX6GNeL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 19,
      name: "ASUS Gaming Monitor 27”",
      brand: "ASUS",
      price: 299,
      image: "https://m.media-amazon.com/images/I/61ErbLJJYJL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 20,
      name: "Razer BlackWidow V3",
      brand: "Razer",
      price: 139,
      image: "https://m.media-amazon.com/images/I/61jN2u4RZ9L._AC_UF894,1000_QL80_.jpg"
    }
  ];

  // دعم CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  res.status(200).json(electronicProducts);
};


