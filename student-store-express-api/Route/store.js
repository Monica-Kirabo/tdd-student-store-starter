const express = require("express");
const store = require("../models/store");
//const { NotFoundError } = require("../utils/errors")
const router = express.Router();
const Store=require("../models/store")
const {fetchProductById}=require("../models/store")

router.get("/", (req, res) => {
  const products = store.fetchProducts();
  res.status(200).json({ products: products });
});

router.get("/:productId", (req, res) => {
  const id = req.params.productId;
  console.log(id)
  const product = store.fetchProductById(Number(id));
  console.log(product);
  res.status(200).json({product:product})
});

router.post("/store", async (req, res, next) => {
    try {
      const newItem = req.body.products;
      if (!newItem ) {
        return next(new BadRequestError("Invalid input"));
      }
      const item = await Store.order(newItem);
      res.status(200).json(item);
    } catch (err) {
      next(err);
    }
  });

  
module.exports = router;
