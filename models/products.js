const products = [];

module.exports = class Product {
  constructor(t,i) {
    //console.log("Model Contructor : ", t);
    this.title = t;
    this.image = i;
    
  }

  save() {
    products.push(this);
    
  }

  static fetchAll() {
    //console.log("Model Data : ", products);
    return products;
  }
};
