class Product{
  constructor(){

  }
  getProduct = async() => {
    const products = await fetch('products.json')
    const res = await products.json()
    return res.products;  

  }

}

// const prod = new Product()
// prod.getProduct()