const express = require("express");
const router = express.Router();
const product = require("./product");

router.get("/data", async (req, res) => {
  const data = {};
  try {
    const fetchProducts = await product.find();
    fetchProducts.forEach((product, index) => (data[index] = product));
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/formatted-data", async (req, res) => {
  const data = {};
  try {
    const brands = await product.distinct("Brand");
    let brandProducts;
    let keys;

    for (let brand of brands) {
      data[brand] = {};

      brandProducts = await product.find({ Brand: brand }).lean();
      keys = Object.keys(brandProducts[0]).filter(
        (key) => !key.startsWith("_") && key != "Brand"
      );

      for (let key of keys) data[brand][key] = {};
      for (let product in brandProducts) {
        for (let key of keys) {
          data[brand][key][brandProducts[product].ID] =
            brandProducts[product][key];
        }
      }
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/brands", async (req, res) => {
  const brands = {};
  try {
    const fetchBrands = await product.distinct("Brand");
    fetchBrands.forEach((brand, index) => (brands[index] = brand));
    res.status(200).json(brands);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
