const glide1 = document.querySelector('.glide')

new Glide(glide1, {
  type: 'carousel',
  startAt: 0,
  perView: 1,
  focusAt: 'center',
  autoplay: 2000,
  hoverpause: false,
}).mount()