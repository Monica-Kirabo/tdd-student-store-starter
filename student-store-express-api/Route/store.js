const express = require("express");
//const store = require("../models/store");
//const { NotFoundError } = require("../utils/errors")
const router = express.Router();
const { BadRequestError } = require("../utils/errors");
const store=require("../models/store")
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
      const newItem = req.body;
      const shoppingCart=newItem.shoppingCart;
      const user=newItem.user;
      if (!user || !shoppingCart||store.checkErrors(shoppingCart)) {
        return next(new BadRequestError("Invalid input"));
      }
      const item = await store.Order(shoppingCart,user);
      res.status(201).json({newItem:item});
    } catch (err) {
      next(err);
    }
  });
  router.get("/orders", (req, res, next) => {
    const purchases = store.getPurchases();
  
    res.status(200).json({ "purchases": purchases });
  });
  
  router.delete("/orders", (req, res, next) => {
  
   console.log(req);
   console.log(res);
   res.send("delete request");
  });
  
module.exports = router;
