module.exports = (req, res) => {
  const electronicProducts = [
    {
      id: 1,
      name: "iPhone 14 Pro",
      brand: "Apple",
      price: 1099,
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-max-deep-purple"
    },
    {
      id: 2,
      name: "Galaxy S23 Ultra",
      brand: "Samsung",
      price: 1199,
      image: "https://images.samsung.com/is/image/samsung/p6pim/levant/2302/gallery/levant-galaxy-s23-ultra-s918-sm-s918bzkdmea-thumb-534313792"
    },
    {
      id: 3,
      name: "MacBook Pro 16”",
      brand: "Apple",
      price: 2499,
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-gallery1-202301"
    },
    {
      id: 4,
      name: "Dell XPS 13",
      brand: "Dell",
      price: 1299,
      image: "https://i.dell.com/sites/csimages/Video_Imagery/all/xps-13-9300-laptop.jpg"
    },
    {
      id: 5,
      name: "Sony WH-1000XM5",
      brand: "Sony",
      price: 399,
      image: "https://m.media-amazon.com/images/I/61WainzowNL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 6,
      name: "iPad Air",
      brand: "Apple",
      price: 599,
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-202203"
    },
    {
      id: 7,
      name: "Galaxy Tab S9",
      brand: "Samsung",
      price: 799,
      image: "https://images.samsung.com/is/image/samsung/p6pim/eg/2307/gallery/eg-galaxy-tab-s9-sm-x710nzaameb-thumb-537377661"
    },
    {
      id: 8,
      name: "Logitech MX Master 3",
      brand: "Logitech",
      price: 99,
      image: "https://resource.logitech.com/content/dam/logitech/en/products/mice/mx-master-3/gallery/mx-master-3-top-view.png"
    },
    {
      id: 9,
      name: "Canon EOS R10",
      brand: "Canon",
      price: 979,
      image: "https://www.canon-europe.com/media/EOS_R10_front_tcm13-2071300.jpg"
    },
    {
      id: 10,
      name: "GoPro HERO11",
      brand: "GoPro",
      price: 499,
      image: "https://gopro.com/content/dam/gopro/en/en_productpage/Hero11-Black/product-thumbnail/Hero11_Black_Thumbnail_1.png"
    },
    {
      id: 11,
      name: "Sony PlayStation 5",
      brand: "Sony",
      price: 499,
      image: "https://m.media-amazon.com/images/I/619BkvKW35L._SL1500_.jpg"
    },
    {
      id: 12,
      name: "Xbox Series X",
      brand: "Microsoft",
      price: 499,
      image: "https://compass-ssl.xbox.com/assets/f1/e2/f1e2037f-d5bc-4644-97bc-0bb546317b1a.jpg"
    },
    {
      id: 13,
      name: "Kindle Paperwhite",
      brand: "Amazon",
      price: 139,
      image: "https://images-na.ssl-images-amazon.com/images/I/61tD4APp2UL._AC_SL1000_.jpg"
    },
    {
      id: 14,
      name: "JBL Flip 6",
      brand: "JBL",
      price: 129,
      image: "https://www.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw9f1a98b8/JBL_Flip6_Hero_Blue_1605x1605px.png"
    },
    {
      id: 15,
      name: "Apple Watch Series 9",
      brand: "Apple",
      price: 399,
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-ultra2-202309"
    },
    {
      id: 16,
      name: "Samsung Galaxy Watch 6",
      brand: "Samsung",
      price: 329,
      image: "https://images.samsung.com/is/image/samsung/p6pim/eg/2307/gallery/eg-galaxy-watch6-sm-r930nzeaegy-thumb-537378170"
    },
    {
      id: 17,
      name: "ASUS ROG Strix G16",
      brand: "ASUS",
      price: 1899,
      image: "https://dlcdnwebimgs.asus.com/gain/C015177B-2617-4A44-80BE-1CF1BC3D27A0"
    },
    {
      id: 18,
      name: "Lenovo ThinkPad X1",
      brand: "Lenovo",
      price: 1799,
      image: "https://p3-ofp.static.pub/fes/cms/2023/06/29/lm0d7fd2qz3cxxyw86mj79exz0u5rx891460.png"
    },
    {
      id: 19,
      name: "Google Pixel 7 Pro",
      brand: "Google",
      price: 899,
      image: "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRBcZGTkkfB2WxMXdhljNPrgc3ZknZJj30mrbFyPtx8gIRCCt0_qvTcZkNntpZ6QW9iSYHTyI0=w1920-h973"
    },
    {
      id: 20,
      name: "Huawei MateBook X Pro",
      brand: "Huawei",
      price: 1499,
      image: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/pc/matebook-x-pro-2023/images/pc/matebook-x-pro-kv.png"
    },
  ];

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  res.status(200).json(electronicProducts);
};


