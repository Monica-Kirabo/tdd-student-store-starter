//import { Storage } from "../data/products";
const {storage} = require("../data/storage")


class Store {
  static fetchProductById(productId) {
    // fetch a single transaction
    const product = storage
      .get("products").value().find(element => element.id === productId)
      
    return product;
  }

  static fetchProducts(){
    const products = storage.get("products").value();
    return products;
  }


static placeOrdler(order){


}
}
module.exports = Store

