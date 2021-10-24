const navBar = document.querySelector('.menu-bar');
const close = document.querySelector('.close');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelector('body');
const productCat = document.querySelectorAll('.p-title');
const filter = document.querySelector('.products')
const displayAll = document.querySelector('.all-products')
const latest = document.querySelector('.latest-products')
const recent = document.querySelector('.recent-products')

const prod = new Product()
const ui = new UI()

navBar.addEventListener('click', () => {
  navMenu.classList.add('show');
  body.classList.add('show');

});
close.addEventListener('click', () => {
  navMenu.classList.remove('show');
  body.classList.remove('show');
});

const displayProduct = (products, category) => {
  
  filter.innerHTML = ui.filteredProduct(products, category)

}


prod.getProduct().then(data => {


productCat.forEach(cat => {

   cat.addEventListener('click', () => {
    displayProduct(data, cat.classList[1])
    productCat.forEach(category => {
      if( cat === category) category.classList.add('active')
      else{
        category.classList.remove('active')
      }
    })

  })
 
  
  }
)

})

window.addEventListener('DOMContentLoaded', async() => {
  const products = await prod.getProduct()

  const allProducts = ui.AllProducts(products)
  const trendProducts = ui.filteredProduct(products, 'trend')
  const latestProducts = ui.filteredProduct(products, 'latest')
  const recentProducts = ui.filteredProduct(products, 'recent')

  filter.innerHTML = trendProducts
  displayAll.innerHTML = allProducts
  latest.innerHTML = latestProducts
  recent.innerHTML = recentProducts
  productCat[0].classList.add('active')
    
})

