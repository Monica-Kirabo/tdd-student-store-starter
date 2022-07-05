//import { storage } from "../data/products";
const { storage } = require("./data/storage");
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
app.use(cors());
const router = require("./Route/store");

//const { NotFoundError } = require("./utils/errors");
app.use(morgan("tiny"));
app.use(express.json());
app.use("/store", router)


 app.get("/", (req, res) => {
   res.status(200).json({ ping: "pong" });
 });
 
// app.get("/store", (req, res) => {
//   res.send(storage.get("products").value());
//  });
// app.get("/store/:productId", function (req, res) {
//   var currproduct = products.filter(function (product) {
//     if (product.id == req.params.id) {
//       return true;
//     }
//   });
//   if (currproduct.length == 1) {
//     res.json(currproduct[0]);
//   } else {
//     res.status(404); //Set status to 404 as movie was not found
//     res.json({ message: "Not Found" });
//   }
// });
//  storage.get("/store", (req, res) => {
//    const product = products.find((x) => x._id === Number(req.params.id));
// res.json(product);
//  });

// app.get("/:productId", (req, res) => {
//   res.send(
//     storage
//       .get("products")
//       .value()
//       .find((element) => element.id === id)
//   );
// });

// app.get("/store/:id", (req, res) => {
//   res.json(req.params.id); // "1"
// });
//const port = 3000;
// app.listen(port, () => {
//   console.log(`🚀 Server listening at http://localhost:${port}`);
// });
module.exports = app;
