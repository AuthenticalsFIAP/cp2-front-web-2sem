function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "assets/img/burger-menu-svgrepo-com.svg";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "assets/img/close.svg";
  }
}