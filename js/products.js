class Product{
  constructor(){

  }
  getProduct = async() => {
    const products = await fetch('products.json').then(result => console.log(result.json));
    // const res = await products.json
  // console.log(products);    

  }

}

// const prod = new Product()
// prod.getProduct()