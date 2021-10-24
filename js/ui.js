


class UI{
  AllProducts(products){

  
    let display = products.map(product => {
      
     return   ` <div class="single-product">
        <div class="img-box">
          <img src="${product.image}" alt="">
        </div> 
        <h4>Men Casual Shoe</h4>
        <div class="stars">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <p>$2000.99</p>
        <div class="e-icons">
          <i class="far fa-eye"></i>
          <i class="far fa-heart"></i>
          <i class="fas fa-sync-alt"></i>
        </div>
      </div>
        `
    })
    return display = display.join("")
  }

  filteredProduct(products, category){
    let display = products.filter(product => product.category === category);
    console.log(display);
    let d =''
    let dis = display.map(product => {
      return ` <div class="single-product">
          <div class="img-box">
            <img src="${product.image}" alt="">
          </div> 
          <h4>Men Casual Shoe</h4>
          <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <p>$2000.99</p>
          <div class="e-icons">
            <i class="far fa-eye"></i>
            <i class="far fa-heart"></i>
            <i class="fas fa-sync-alt"></i>
          </div>
        </div>
        
      `
  })
  return dis = dis.join("");
  // display = display.join("");
    
  };
 
}

