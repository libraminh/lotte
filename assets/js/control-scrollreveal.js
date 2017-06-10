$(function(){
  window.sr = ScrollReveal();
  sr.reveal('.main-nav', {
    duration: 1500,
    origin: 'bottom'
  });
  sr.reveal('.intro h2', {
    duration: 1500,
    delay: 500,
    origin: 'top'
  });
  sr.reveal('.race', {
    duration: 1500,
    delay: 1200,
    origin: 'top'
  });
  sr.reveal('.box', {
    duration: 800,
    viewFactor: 0.8
  }, 300);
  sr.reveal('.panel1', {
    duration: 1500,
    origin: 'left',
    distance: '300px'
  });
  sr.reveal('.panel2', {
    duration: 1500,
    origin: 'right',
    distance: '300px'
  });
  sr.reveal('section.hitech .container', {
    duration: 1500,
    distance: '80px'
  });
  sr.reveal('.camp', {
    duration: 300,
    distance: '30px',
    easing: 'cubic-bezier(0.3,-0.36, 0.68, 1.46)',
  }, 300);
  sr.reveal('.prize1, .promotion-stuff-1', {
    duration: 2000,
    origin: 'left',
    distance: '100px'
  });
  sr.reveal('.prize2, .promotion-stuff-2', {
    duration: 2000,
    origin: 'top',
    distance: '100px'
  });
  sr.reveal('.prize3, .promotion-stuff-3', {
    duration: 2000,
    origin: 'right',
    distance: '100px'
  });
  sr.reveal('.coupon-info, .promotion-info, .sales-info', {
    duration: 1000,
    origin: 'top',
    distance: '50px'
  });
  sr.reveal('.coupon-gift-1', {
    duration: 1500,
    delay: 200,
    origin: 'left',
    distance: '200px'
  });
  sr.reveal('.coupon-gift-2', {
    duration: 1500,
    delay: 200,
    origin: 'right',
    distance: '200px'
  });
  sr.reveal('.box-product', {
    duration: 300,
    distance: '30px',
    easing: 'cubic-bezier(0.3,-0.36, 0.68, 1.46)',
  }, 300);
  sr.reveal('section.ads img', {
    duration: 1500,
    origin: 'right',
    distance: '200px'
  });
  sr.reveal('.wrap-footer', {
    duration: 1500,
  });
})
